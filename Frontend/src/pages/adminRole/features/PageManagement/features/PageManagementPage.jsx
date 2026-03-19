import React, { useEffect, useMemo, useRef, useState } from "react";
import { MoreVertical, Plus, Search, X } from "lucide-react";
import { pages } from "../../../../../data/dummyData";
import AddPage from "./AddPage";
import EditPage from "./EditPage";

const ROWS_PER_PAGE = 7;
const STATUS_STYLES = {
  Active: "bg-emerald-100 text-emerald-800",
  Pending: "bg-amber-100 text-amber-800",
  Inactive: "bg-gray-100 text-gray-800",
};

const PageManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [showAddPage, setShowAddPage] = useState(false);
  const [pagesList, setPagesList] = useState(() => pages);
  const [editingPage, setEditingPage] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return pagesList;
    const q = searchQuery.toLowerCase();
    return pagesList.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.status?.toLowerCase().includes(q)
    );
  }, [pagesList, searchQuery]);

  const handleAddPage = ({ name, description, status }) => {
    const maxId = pagesList.reduce((max, p) => (typeof p.id === "number" ? Math.max(max, p.id) : max), 0);
    const createdDate = new Date().toLocaleString();
    const next = {
      id: maxId + 1,
      name,
      description,
      status,
      createdDate,
    };

    setPagesList((prev) => [next, ...prev]);
    setSearchQuery("");
    setCurrentPage(1);
    setShowAddPage(false);
  };

  const handleUpdatePage = ({ id, name, description, status }) => {
    setPagesList((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              name,
              description,
              status,
            }
          : p
      )
    );
    setEditingPage(null);
  };

  const handleDeletePage = (id) => {
    const ok = window.confirm("Delete this page?");
    if (!ok) return;
    setPagesList((prev) => prev.filter((p) => p.id !== id));
    setOpenDropdownId(null);
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE));
  const paginatedRows = filtered.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );
  const startEntry =
    filtered.length === 0 ? 0 : (currentPage - 1) * ROWS_PER_PAGE + 1;
  const endEntry = Math.min(
    currentPage * ROWS_PER_PAGE,
    filtered.length
  );

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen items-center">
      {/* Header */}
      <div data-layer="Header" className="Header w-full h-auto min-h-24 px-4 sm:px-8 pt-4 pb-[1.30px] bg-white border-b-[1.30px] border-gray-200 flex flex-col justify-start items-start shrink-0">
        <div data-layer="Container" className="Container self-stretch h-auto min-h-12 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <div data-layer="Container" className="Container w-full sm:w-64 h-auto flex justify-start items-center">
            <div data-layer="Container" className="Container w-full flex-1 h-auto flex flex-col justify-start items-start gap-0.5">
              <div data-layer="Heading 2" className="Heading2 self-stretch h-7 relative">
                <div data-layer="Page Management" className="PageManagement left-0 top-[-0.41px] absolute justify-start text-slate-900 text-lg font-semibold font-['Inter'] leading-7">Page Management</div>
              </div>
              <div data-layer="Paragraph" className="Paragraph self-stretch h-5 relative">
                <div data-layer="Manage and monitor all pages" className="ManageAndMonitorAllPages left-0 top-[0.30px] absolute justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5">Manage and monitor all pages</div>
              </div>
            </div>
          </div>
          <div data-layer="Container" className="Container w-full sm:w-40 h-10 mt-4 sm:mt-0 relative flex justify-start sm:justify-end">
            <div data-layer="Button" className="Button size-9 relative sm:absolute sm:left-0 sm:top-[1.30px] rounded-[10px] mr-3 sm:mr-0">
              <div data-svg-wrapper data-layer="Icon" className="Icon left-[8px] top-[8px] absolute">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_299_32291)">
                    <path d="M8.54883 17.4834C8.69498 17.7365 8.90517 17.9467 9.15829 18.0928C9.41141 18.2389 9.69853 18.3159 9.9908 18.3159C10.2831 18.3159 10.5702 18.2389 10.8233 18.0928C11.0764 17.9467 11.2866 17.7365 11.4328 17.4834" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.71557 12.7596C2.60681 12.8788 2.53503 13.027 2.50897 13.1863C2.48292 13.3455 2.5037 13.5089 2.56879 13.6566C2.63389 13.8042 2.74049 13.9298 2.87563 14.018C3.01077 14.1062 3.16862 14.1532 3.32999 14.1533H16.6508C16.8121 14.1533 16.97 14.1065 17.1052 14.0185C17.2405 13.9305 17.3472 13.8051 17.4125 13.6575C17.4777 13.51 17.4987 13.3466 17.4729 13.1874C17.447 13.0281 17.3755 12.8798 17.2669 12.7604C16.1596 11.619 14.9857 10.406 14.9857 6.66034C14.9857 5.3355 14.4594 4.06493 13.5226 3.12813C12.5858 2.19133 11.3152 1.66504 9.99039 1.66504C8.66555 1.66504 7.39498 2.19133 6.45818 3.12813C5.52138 4.06493 4.99509 5.3355 4.99509 6.66034C4.99509 10.406 3.82036 11.619 2.71557 12.7596Z" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_299_32291">
                      <rect width="19.9812" height="19.9812" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div data-svg-wrapper data-layer="Text" className="Text left-[23.99px] top-[3.99px] absolute">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.99826C0 1.79008 1.79008 0 3.99826 0C6.20644 0 7.99653 1.79008 7.99653 3.99826C7.99653 6.20644 6.20644 7.99653 3.99826 7.99653C1.79008 7.99653 0 6.20644 0 3.99826Z" fill="#E00F0F" />
                </svg>
              </div>
            </div>
            <div data-layer="Button" className="Button w-28 h-10 pl-4 relative sm:absolute sm:left-[51.97px] sm:top-0 bg-white rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 flex justify-start items-center gap-2">
              <div data-svg-wrapper data-layer="Icon" className="Icon relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_299_32296)">
                    <path d="M3.33203 5.33105L7.33029 9.32932" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.66602 9.32943L6.66428 5.33116L7.99703 3.33203" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.33203 3.33203H9.32856" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.66406 1.33301H5.33044" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6599 14.6599L11.328 7.99609L7.99609 14.6599" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.33008 11.9951H13.3283" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_299_32296">
                      <rect width="15.9931" height="15.9931" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div data-layer="Text" className="Text w-6 h-5 relative">
                <div data-layer="Eng" className="Eng left-0 top-[0.30px] absolute text-center justify-start text-gray-600 text-sm font-medium font-['Inter'] leading-5">Eng</div>
              </div>
              <div data-svg-wrapper data-layer="Icon" className="Icon relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6613 5.99707L7.99669 10.6617L3.33203 5.99707" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full px-4 sm:px-8 pt-8 pb-8 mx-auto mt-0">
        {editingPage ? (
          <EditPage
            page={editingPage}
            onBack={() => setEditingPage(null)}
            onUpdate={handleUpdatePage}
          />
        ) : showAddPage ? (
          <AddPage onBack={() => setShowAddPage(false)} onSave={handleAddPage} />
        ) : (
          <>
        {/* Header with Add Page */}
        <div className="w-full flex justify-end">
          <button
            onClick={() => setShowAddPage(true)}
            type="button"
            className="w-40 h-9 bg-cyan-900 rounded-lg flex items-center justify-center gap-2 text-white text-base font-medium hover:bg-cyan-800"
          >
            <Plus size={20} stroke="white" />
            Add Page
          </button>
        </div>

        {/* Search bar */}
        <div className="w-full p-4 bg-white rounded-2xl outline outline-[1.38px] outline-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1 max-w-[798px] h-9 px-4 py-1.5 rounded-[10px] outline outline-[1.38px] outline-gray-200 flex items-center gap-2">
              <Search size={20} stroke="#4A5565" className="shrink-0" />
              <input
                type="text"
                placeholder="Search pages..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="flex-1 min-w-0 bg-transparent text-base text-neutral-950 placeholder:text-neutral-950/50 outline-none"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:w-32 h-9 bg-cyan-900 rounded-[10px] flex items-center justify-center gap-2 text-white text-sm font-normal">
                <Search size={16} stroke="white" />
                Search
              </button>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="w-28 h-9 bg-white rounded-[10px] outline outline-[1.38px] outline-gray-200 flex items-center justify-center gap-2 text-slate-900 text-sm font-normal"
              >
                <X size={16} stroke="#0F172A" />
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 bg-white rounded-2xl outline outline-[1.30px] outline-gray-100 overflow-visible w-full">
          <div className="overflow-x-auto overflow-y-visible w-full">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="bg-gray-200 h-14">
                  <th className="text-left pl-6 pr-3 text-gray-600 text-xs font-semibold">
                    ID
                  </th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">
                    Name
                  </th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">
                    Description
                  </th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">
                    Status
                  </th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">
                    Created Date
                  </th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">
                    My Bid
                  </th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">
                    Received Bid
                  </th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedRows.length === 0 ? (
                  <tr className="h-16">
                    <td
                      colSpan={8}
                      className="text-center text-gray-400 text-sm py-8"
                    >
                      No pages found
                    </td>
                  </tr>
                ) : (
                  paginatedRows.map((row) => (
                    <tr
                      key={row.id}
                      className="h-16 border-b border-gray-100 hover:bg-gray-50/50"
                    >
                      <td className="pl-6 pr-3 text-gray-600 text-sm font-normal">
                        {String(row.id).padStart(2, "0")}
                      </td>
                      <td className="px-3 text-gray-600 text-sm font-medium">
                        {row.name}
                      </td>
                      <td className="px-3 text-gray-600 text-sm font-normal max-w-[200px] truncate">
                        {row.description}
                      </td>
                      <td className="px-3">
                        <span
                          className={`inline-flex items-center justify-center px-3 h-6 rounded-full text-xs font-medium ${STATUS_STYLES[row.status] || "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 text-gray-600 text-sm font-normal">
                        {row.createdDate}
                      </td>
                      <td className="px-3">
                        <button
                          type="button"
                          className="w-24 h-9 bg-white rounded-[10px] outline outline-[1.30px] outline-gray-200 flex items-center justify-center gap-2 text-slate-900 text-xs font-medium hover:bg-gray-50"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="w-4 h-4"
                          >
                            <path
                              d="M14.0008 14.0162L11.1074 11.1229"
                              stroke="currentColor"
                              strokeWidth="1.67"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.33333 12.683C10.2789 12.683 12.6667 10.2952 12.6667 7.34966C12.6667 4.40414 10.2789 2.01633 7.33333 2.01633C4.38781 2.01633 2 4.40414 2 7.34966C2 10.2952 4.38781 12.683 7.33333 12.683Z"
                              stroke="currentColor"
                              strokeWidth="1.67"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          View Bid
                        </button>
                      </td>
                      <td className="px-3">
                        <button
                          type="button"
                          className="w-32 h-9 bg-white rounded-[10px] outline outline-[1.30px] outline-gray-200 flex items-center justify-center gap-2 text-slate-900 text-xs font-medium hover:bg-gray-50"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="w-4 h-4"
                          >
                            <path
                              d="M14.0008 14.0162L11.1074 11.1229"
                              stroke="currentColor"
                              strokeWidth="1.67"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.33333 12.683C10.2789 12.683 12.6667 10.2952 12.6667 7.34966C12.6667 4.40414 10.2789 2.01633 7.33333 2.01633C4.38781 2.01633 2 4.40414 2 7.34966C2 10.2952 4.38781 12.683 7.33333 12.683Z"
                              stroke="currentColor"
                              strokeWidth="1.67"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          View Received
                        </button>
                      </td>
                      <td className="px-3">
                        <div
                          className="relative"
                          ref={openDropdownId === row.id ? dropdownRef : null}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDropdownId(openDropdownId === row.id ? null : row.id)
                            }
                            className="size-8 p-2 rounded-[10px] hover:bg-gray-100 text-gray-600"
                            title="More options"
                          >
                            <MoreVertical size={18} strokeWidth={1.5} />
                          </button>

                          {openDropdownId === row.id && (
                            <div
                              data-layer="3 Dots Dropdown"
                              className="DotsDropdown absolute right-0 top-full mt-1 z-50 w-52 max-h-72 overflow-auto px-4 py-3 bg-white rounded-2xl outline outline-[0.70px] outline-offset-[-0.70px] outline-gray-600 shadow-lg inline-flex flex-col justify-start items-start gap-3"
                            >
                              <button
                                type="button"
                                onClick={() => setOpenDropdownId(null)}
                                data-layer="Frame 30"
                                className="Frame30 self-stretch h-7 relative bg-cyan-900 rounded-md hover:bg-cyan-800 transition-colors"
                              >
                                <div
                                  data-layer="View Details"
                                  className="ViewDetails left-[36.61px] top-[4.50px] absolute justify-start text-white text-sm font-normal font-['Inter'] leading-5"
                                >
                                  View Details
                                </div>
                                <div
                                  data-svg-wrapper
                                  data-layer="Icon"
                                  className="Icon left-[11px] top-[7px] absolute"
                                >
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath={`url(#clip0_1347_516_${row.id})`}>
                                      <path
                                        d="M1.37368 8.22816C1.31815 8.07855 1.31815 7.91397 1.37368 7.76436C1.91458 6.45283 2.83273 5.33145 4.01172 4.54236C5.19071 3.75328 6.57745 3.33203 7.99614 3.33203C9.41483 3.33203 10.8016 3.75328 11.9806 4.54236C13.1596 5.33145 14.0777 6.45283 14.6186 7.76436C14.6741 7.91397 14.6741 8.07855 14.6186 8.22816C14.0777 9.53969 13.1596 10.6611 11.9806 11.4502C10.8016 12.2392 9.41483 12.6605 7.99614 12.6605C6.57745 12.6605 5.19071 12.2392 4.01172 11.4502C2.83273 10.6611 1.91458 9.53969 1.37368 8.22816Z"
                                        stroke="white"
                                        strokeWidth="1.33275"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M7.99718 9.99533C9.10127 9.99533 9.99631 9.10029 9.99631 7.9962C9.99631 6.89211 9.10127 5.99707 7.99718 5.99707C6.89309 5.99707 5.99805 6.89211 5.99805 7.9962C5.99805 9.10029 6.89309 9.99533 7.99718 9.99533Z"
                                        stroke="white"
                                        strokeWidth="1.33275"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id={`clip0_1347_516_${row.id}`}>
                                        <rect
                                          width="15.9931"
                                          height="15.9931"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </button>

                              <div
                                data-layer="Frame 31"
                                className="Frame31 self-stretch px-3 flex flex-col justify-start items-start gap-3"
                              >
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingPage(row);
                                    setShowAddPage(false);
                                    setOpenDropdownId(null);
                                  }}
                                  data-layer="Frame 38"
                                  className="Frame38 self-stretch inline-flex justify-start items-center gap-3 hover:bg-gray-50 rounded-md py-1.5 px-2 -mx-2 transition-colors"
                                >
                                  <div data-svg-wrapper data-layer="Icon" className="Icon relative">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath={`url(#clip0_1355_530_${row.id})`}>
                                        <path
                                          d="M7.9974 1.99902H3.33275C2.97929 1.99902 2.64029 2.13944 2.39035 2.38938C2.14041 2.63932 2 2.97831 2 3.33178V12.6611C2 13.0145 2.14041 13.3535 2.39035 13.6035C2.64029 13.8534 2.97929 13.9938 3.33275 13.9938H12.662C13.0155 13.9938 13.3545 13.8534 13.6044 13.6035C13.8544 13.3535 13.9948 13.0145 13.9948 12.6611V7.99642"
                                          stroke="#4A5565"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12.2445 1.74899C12.5096 1.48389 12.8691 1.33496 13.244 1.33496C13.6189 1.33496 13.9785 1.48389 14.2436 1.74899C14.5087 2.0141 14.6576 2.37365 14.6576 2.74856C14.6576 3.12347 14.5087 3.48302 14.2436 3.74813L8.23753 9.75485C8.0793 9.91295 7.88382 10.0287 7.66911 10.0914L5.75461 10.6511C5.69727 10.6679 5.63648 10.6689 5.57862 10.654C5.52076 10.6392 5.46795 10.6091 5.42571 10.5669C5.38348 10.5246 5.35337 10.4718 5.33855 10.414C5.32373 10.3561 5.32473 10.2953 5.34145 10.238L5.90121 8.32347C5.9642 8.10893 6.08015 7.91369 6.2384 7.75572L12.2445 1.74899Z"
                                          stroke="#4A5565"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id={`clip0_1355_530_${row.id}`}>
                                          <rect
                                            width="15.9931"
                                            height="15.9931"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                  <div
                                    data-layer="Edit"
                                    className="Edit justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5"
                                  >
                                    Edit
                                  </div>
                                </button>
                              </div>

                              <div
                                data-layer="Frame 31"
                                className="Frame31 self-stretch px-3 flex flex-col justify-start items-start gap-3"
                              >
                                <button
                                  type="button"
                                  onClick={() => handleDeletePage(row.id)}
                                  data-layer="Frame 38"
                                  className="Frame38 self-stretch inline-flex justify-start items-center gap-3 hover:bg-gray-50 rounded-md py-1.5 px-2 -mx-2 transition-colors"
                                >
                                  <div
                                    data-svg-wrapper
                                    data-layer="weui:delete-outlined"
                                    className="WeuiDeleteOutlined relative"
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.51665 4.26667L5.05798 13.3653C5.06613 13.5009 5.12572 13.6283 5.22459 13.7215C5.32345 13.8146 5.45414 13.8666 5.58998 13.8667H10.4113C10.5472 13.8666 10.6779 13.8146 10.7767 13.7215C10.8756 13.6283 10.9352 13.5009 10.9433 13.3653L11.4847 4.26667H4.51665ZM12.2867 4.26667L11.742 13.4127C11.7218 13.7519 11.5728 14.0706 11.3255 14.3037C11.0781 14.5368 10.7512 14.6666 10.4113 14.6667H5.58998C5.25015 14.6666 4.92317 14.5368 4.67585 14.3037C4.42853 14.0706 4.27954 13.7519 4.25932 13.4127L3.71465 4.26667H2.33398V3.8C2.33398 3.71159 2.3691 3.62681 2.43162 3.5643C2.49413 3.50179 2.57891 3.46667 2.66732 3.46667H13.334C13.4224 3.46667 13.5072 3.50179 13.5697 3.5643C13.6322 3.62681 13.6673 3.71159 13.6673 3.8V4.26667H12.2867ZM9.33398 2C9.42239 2 9.50717 2.03512 9.56969 2.09763C9.6322 2.16014 9.66732 2.24493 9.66732 2.33333V2.8H6.33398V2.33333C6.33398 2.24493 6.3691 2.16014 6.43161 2.09763C6.49413 2.03512 6.57891 2 6.66732 2H9.33398ZM6.33398 6H7.13398L7.46732 12H6.66732L6.33398 6ZM8.86732 6H9.66732L9.33398 12H8.53398L8.86732 6Z"
                                        fill="#4A5565"
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    data-layer="Delete"
                                    className="Delete justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5"
                                  >
                                    Delete
                                  </div>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-gray-600 text-sm font-normal">
            Showing {startEntry} to {endEntry} of {filtered.length} entries
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-24 h-10 rounded-lg outline outline-[1.30px] outline-gray-200 text-gray-600 text-sm font-medium disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`size-10 rounded-lg text-sm font-medium ${currentPage === page
                  ? "bg-cyan-900 text-white outline outline-[1.30px] outline-cyan-900"
                  : "bg-white outline outline-[1.30px] outline-gray-200 text-gray-600"
                  }`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={currentPage === totalPages}
              className="w-16 h-10 rounded-lg outline outline-[1.30px] outline-gray-200 text-gray-600 text-sm font-medium disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PageManagementPage;
