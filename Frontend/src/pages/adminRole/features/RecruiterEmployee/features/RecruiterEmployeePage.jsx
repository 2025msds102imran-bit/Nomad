import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { recruiterEmployees } from "../../../../../data/dummyData";
import EmployeeDetail from "./EmployeeDetail";

const ROWS_PER_PAGE = 7;
const STATUS_STYLES = {
  Active: "bg-emerald-100 text-emerald-800",
  Pending: "bg-amber-100 text-amber-800",
  Inactive: "bg-gray-100 text-gray-800",
};

const RecruiterEmployeePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter rows
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return recruiterEmployees;
    const q = searchQuery.toLowerCase();
    return recruiterEmployees.filter(
      (r) =>
        r.type?.toLowerCase().includes(q) ||
        r.recruiterName?.toLowerCase().includes(q) ||
        r.employeeName?.toLowerCase().includes(q) ||
        r.status?.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE));
  const paginatedRows = filtered.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );
  const startEntry =
    filtered.length === 0 ? 0 : (currentPage - 1) * ROWS_PER_PAGE + 1;
  const endEntry = Math.min(currentPage * ROWS_PER_PAGE, filtered.length);

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen items-center">
      {/* Header */}
      {/* Header */} <div data-layer="Header" className="Header w-full h-20 px-8 pt-4 pb-[1.30px] bg-white border-b-[1.30px] border-gray-200 inline-flex flex-col justify-start items-start shrink-0"> <div data-layer="Container" className="Container self-stretch h-12 inline-flex justify-between items-center"> <div data-layer="Container" className="Container w-64 h-12 flex justify-start items-center"> <div data-layer="Container" className="Container flex-1 h-12 inline-flex flex-col justify-start items-start gap-0.5"> <div data-layer="Heading 2" className="Heading2 self-stretch h-7 relative"> <div data-layer="Recruiter Employee Management" className="RecruiterEmployeeManagement left-0 top-[-0.41px] absolute justify-start text-slate-900 text-lg font-semibold font-['Inter'] leading-7 whitespace-nowrap">Recruiter Employee Management</div> </div> <div data-layer="Paragraph" className="Paragraph self-stretch h-5 relative"> <div data-layer="Manage and monitor all recruiter employee" className="ManageAndMonitorAllRecruiterEmployee left-0 top-[0.30px] absolute justify-start text-gray-600 text-sm font-normal font-['Inter'] leading-5 whitespace-nowrap">Manage and monitor all recruiter employee </div> </div> </div> </div> <div data-layer="Container" className="Container w-40 h-10 relative"> <div data-layer="Button" className="Button size-9 left-0 top-[1.30px] absolute rounded-[10px]"> <div data-svg-wrapper data-layer="Icon" className="Icon left-[8px] top-[8px] absolute"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_285_29463)"> <path d="M8.54883 17.4834C8.69498 17.7365 8.90517 17.9467 9.15829 18.0928C9.41141 18.2389 9.69853 18.3159 9.9908 18.3159C10.2831 18.3159 10.5702 18.2389 10.8233 18.0928C11.0764 17.9467 11.2866 17.7365 11.4328 17.4834" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" /> <path d="M2.71557 12.7596C2.60681 12.8788 2.53503 13.027 2.50897 13.1863C2.48292 13.3455 2.5037 13.5089 2.56879 13.6566C2.63389 13.8042 2.74049 13.9298 2.87563 14.018C3.01077 14.1062 3.16862 14.1532 3.32999 14.1533H16.6508C16.8121 14.1533 16.97 14.1065 17.1052 14.0185C17.2405 13.9305 17.3472 13.8051 17.4125 13.6575C17.4777 13.51 17.4987 13.3466 17.4729 13.1874C17.447 13.0281 17.3755 12.8798 17.2669 12.7604C16.1596 11.619 14.9857 10.406 14.9857 6.66034C14.9857 5.3355 14.4594 4.06493 13.5226 3.12813C12.5858 2.19133 11.3152 1.66504 9.99039 1.66504C8.66555 1.66504 7.39498 2.19133 6.45818 3.12813C5.52138 4.06493 4.99509 5.3355 4.99509 6.66034C4.99509 10.406 3.82036 11.619 2.71557 12.7596Z" stroke="#4A5565" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_285_29463"> <rect width="19.9812" height="19.9812" fill="white" /> </clipPath> </defs> </svg> </div> <div data-svg-wrapper data-layer="Text" className="Text left-[23.99px] top-[3.99px] absolute"> <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 3.99826C0 1.79008 1.79008 0 3.99826 0C6.20644 0 7.99653 1.79008 7.99653 3.99826C7.99653 6.20644 6.20644 7.99653 3.99826 7.99653C1.79008 7.99653 0 6.20644 0 3.99826Z" fill="#E00F0F" /> </svg> </div> </div> <div data-layer="Button" className="Button w-28 h-10 pl-4 left-[51.97px] top-0 absolute bg-white rounded-[10px] outline outline-[1.30px] outline-offset-[-1.30px] outline-gray-200 inline-flex justify-start items-center gap-2"> <div data-svg-wrapper data-layer="Icon" className="Icon relative"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_285_29468)"> <path d="M3.33203 5.33105L7.33029 9.32932" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" /> <path d="M2.66602 9.32943L6.66428 5.33116L7.99703 3.33203" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" /> <path d="M1.33203 3.33203H9.32856" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" /> <path d="M4.66406 1.33252H5.33044" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" /> <path d="M14.6599 14.6604L11.328 7.99658L7.99609 14.6604" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" /> <path d="M9.33008 11.9946H13.3283" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_285_29468"> <rect width="15.9931" height="15.9931" fill="white" /> </clipPath> </defs> </svg> </div> <div data-layer="Text" className="Text w-6 h-5 relative"> <div data-layer="Eng" className="Eng left-0 top-[0.30px] absolute text-center justify-start text-gray-600 text-sm font-medium font-['Inter'] leading-5">Eng</div> </div> <div data-svg-wrapper data-layer="Icon" className="Icon relative"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.6613 5.99756L7.99669 10.6622L3.33203 5.99756" stroke="#4A5565" strokeWidth="1.33275" strokeLinecap="round" strokeLinejoin="round" /> </svg> </div> </div> </div> </div> </div>

      <div className="flex flex-col gap-6 w-full px-8 pt-8 pb-8 mx-auto mt-0">
        {/* Search bar */}
        <div className="w-full p-4 bg-white rounded-2xl outline outline-[1.38px] outline-gray-100">
          <div className="flex justify-between items-center gap-3">
            <div className="flex-1 max-w-[798px] h-9 px-4 py-1.5 rounded-[10px] outline outline-[1.38px] outline-gray-200 flex items-center gap-2">
              <Search size={20} stroke="#4A5565" className="shrink-0" />
              <input
                type="text"
                placeholder="Search placements..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="flex-1 min-w-0 bg-transparent text-base text-neutral-950 placeholder:text-neutral-950/50 outline-none"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="w-32 h-9 bg-cyan-900 rounded-[10px] flex items-center justify-center gap-2 text-white text-sm font-normal">
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
        <div className="flex-1 bg-white rounded-2xl outline outline-[1.30px] outline-gray-100 overflow-visible">
          <div className="overflow-x-auto overflow-y-visible">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="bg-gray-200 h-14">
                  <th className="text-left pl-6 pr-3 text-gray-600 text-xs font-semibold">ID</th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">Type</th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">Recruiter Name</th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">Employees Name</th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">Created Date</th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">Status</th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">My Bid</th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">Received Bid</th>
                  <th className="text-left px-3 text-gray-600 text-xs font-semibold">Action</th>
                </tr>
              </thead>
              <tbody ref={dropdownRef}>
                {paginatedRows.length === 0 ? (
                  <tr className="h-16">
                    <td colSpan={9} className="text-center text-gray-400 text-sm py-8">
                      No recruiter employees found
                    </td>
                  </tr>
                ) : (
                  paginatedRows.map((row) => (
                    <tr key={row.id} className="h-16 border-b border-gray-100 hover:bg-gray-50/50">
                      <td className="pl-6 pr-3 text-gray-600 text-sm font-normal">
                        {String(row.id).padStart(2, "0")}
                      </td>
                      <td className="px-3 text-gray-600 text-sm font-medium">{row.type}</td>
                      <td className="px-3 text-gray-600 text-sm font-normal">{row.recruiterName}</td>
                      <td className="px-3 text-gray-600 text-sm font-medium">{row.employeeName}</td>
                      <td className="px-3 text-gray-600 text-sm font-normal">{row.createdDate}</td>
                      <td className="px-3">
                        <span className={`inline-flex items-center justify-center px-3 h-6 rounded-full text-xs font-medium ${STATUS_STYLES[row.status] || "bg-gray-100 text-gray-800"}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3">
                        <button className="w-24 h-9 bg-white rounded-[10px] outline outline-[1.30px] outline-gray-200 flex items-center justify-center gap-2 text-slate-900 text-xs font-medium hover:bg-gray-50">
                          {/* My Bid SVG */}
                          View Bid
                        </button>
                      </td>
                      <td className="px-3">
                        <button className="w-32 h-9 bg-white rounded-[10px] outline outline-[1.30px] outline-gray-200 flex items-center justify-center gap-2 text-slate-900 text-xs font-medium hover:bg-gray-50">
                          {/* Received Bid SVG */}
                          View Received
                        </button>
                      </td>
                      <td className="px-3">
                        <div className="relative flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDropdownId(openDropdownId === row.id ? null : row.id)
                            }
                            className="size-8 p-2 rounded-[10px] hover:bg-gray-100 text-gray-600"
                          >
                            {/* 3 Dots SVG */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5" > <path d="M9 15.25C9 14.9185 9.1317 14.6005 9.36612 14.3661C9.60054 14.1317 9.91848 14 10.25 14C10.5815 14 10.8995 14.1317 11.1339 14.3661C11.3683 14.6005 11.5 14.9185 11.5 15.25C11.5 15.5815 11.3683 15.8995 11.1339 16.1339C10.8995 16.3683 10.5815 16.5 10.25 16.5C9.91848 16.5 9.60054 16.3683 9.36612 16.1339C9.1317 15.8995 9 15.5815 9 15.25ZM9 10.25C9 9.91848 9.1317 9.60054 9.36612 9.36612C9.60054 9.1317 9.91848 9 10.25 9C10.5815 9 10.8995 9.1317 11.1339 9.36612C11.3683 9.60054 11.5 9.91848 11.5 10.25C11.5 10.5815 11.3683 10.8995 11.1339 11.1339C10.8995 11.3683 10.5815 11.5 10.25 11.5C9.91848 11.5 9.60054 11.3683 9.36612 11.1339C9.1317 10.8995 9 10.5815 9 10.25ZM9 5.25C9 4.91848 9.1317 4.60054 9.36612 4.36612C9.60054 4.1317 9.91848 4 10.25 4C10.5815 4 10.8995 4.1317 11.1339 4.36612C11.3683 4.60054 11.5 4.91848 11.5 5.25C11.5 5.58152 11.3683 5.89946 11.1339 6.13388C10.8995 6.3683 10.5815 6.5 10.25 6.5C9.91848 6.5 9.60054 6.3683 9.36612 6.13388C9.1317 5.89946 9 5.58152 9 5.25Z" fill="currentColor" /> </svg>
                          </button>

                          {/* Dropdown */}
                          {openDropdownId === row.id && (
                            <div className="absolute right-0 top-10 mt-2 w-52 px-4 py-3 bg-white rounded-2xl outline-[0.70px] outline-gray-600 flex flex-col gap-3 z-50">
                              <div className="h-7 relative bg-cyan-900 rounded-md cursor-pointer">
                                <span onClick={() => <EmployeeDetail/> } className="absolute left-9 top-1 text-white text-sm">View Details</span>
                              </div>
                              <div className="px-3 flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-md py-1">
                                <span className="text-gray-600 text-sm">Delete</span>
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
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm font-normal">
            Showing {startEntry} to {endEntry} of {filtered.length} entries
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-24 h-10 rounded-lg outline outline-[1.30px] outline-gray-200 text-gray-600 text-sm font-medium disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`size-10 rounded-lg text-sm font-medium ${
                  currentPage === page
                    ? "bg-cyan-900 text-white outline outline-[1.30px] outline-cyan-900"
                    : "bg-white outline outline-[1.30px] outline-gray-200 text-gray-600"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-16 h-10 rounded-lg outline outline-[1.30px] outline-gray-200 text-gray-600 text-sm font-medium disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterEmployeePage;