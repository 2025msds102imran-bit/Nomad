import React, { useEffect, useMemo, useRef, useState } from "react";
import { MoreVertical, Search, X } from "lucide-react";
import { recruiters } from "../../../data/dummyData";

const ROWS_PER_PAGE = 7;
const STATUS_STYLES = {
  Verified: "bg-emerald-100 text-emerald-800",
  Pending: "bg-amber-100 text-amber-800",
  Approved: "bg-emerald-100 text-emerald-800",
};

const RecruiterCompany = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState(null);
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

  const enrichedCompanies = useMemo(
    () =>
      recruiters.map((r) => ({
        ...r,
        contact: "+1 234 567 890",
        createdDate: "11/11/2025 4:44:35 AM",
        status: r.status || "Approved",
      })),
    []
  );

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return enrichedCompanies;
    const q = searchQuery.toLowerCase();
    return enrichedCompanies.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.speciality?.toLowerCase().includes(q)
    );
  }, [searchQuery, enrichedCompanies]);

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
    <div className="flex flex-col gap-6 w-full min-w-0 pl-8 pr-14 pt-8">
      {/* Search bar */}
      <div className="w-full p-4 bg-white rounded-2xl outline outline-[1.38px] outline-gray-100">
        <div className="flex justify-between items-center gap-3">
          <div className="flex-1 max-w-[798px] h-9 px-4 py-1.5 rounded-[10px] outline outline-[1.38px] outline-gray-200 flex items-center gap-2">
            <Search size={20} stroke="#4A5565" className="shrink-0" />
            <input
              type="text"
              placeholder="Search recruiter companies..."
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
      <div className="flex-1 bg-white rounded-2xl outline outline-[1.30px] outline-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
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
                  Email
                </th>
                <th className="text-left px-3 text-gray-600 text-xs font-semibold">
                  Contact
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
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedRows.length === 0 ? (
                <tr className="h-16">
                  <td
                    colSpan={9}
                    className="text-center text-gray-400 text-sm py-8"
                  >
                    No recruiter companies found
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
                    <td className="px-3 text-gray-600 text-sm font-normal">
                      {row.email}
                    </td>
                    <td className="px-3 text-gray-600 text-sm font-semibold">
                      {row.contact}
                    </td>
                    <td className="px-3">
                      <span
                        className={`inline-flex items-center justify-center px-3 h-6 rounded-full text-xs font-medium ${
                          STATUS_STYLES[row.status] || "bg-gray-100 text-gray-800"
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
                            className="DotsDropdown absolute right-0 top-full mt-1 z-50 w-52 px-4 py-3 bg-white rounded-2xl outline outline-[0.70px] outline-offset-[-0.70px] outline-gray-600 shadow-lg inline-flex flex-col justify-start items-start gap-3 overflow-hidden"
                          >
                            <button
                              type="button"
                              onClick={() => setOpenDropdownId(null)}
                              className="Frame30 self-stretch h-7 relative bg-cyan-900 rounded-md flex items-center justify-center gap-2 hover:bg-cyan-800 transition-colors"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath={`url(#clip0_view_${row.id})`}>
                                  <path
                                    d="M1.37368 8.2284C1.31815 8.07879 1.31815 7.91422 1.37368 7.76461C1.91458 6.45308 2.83273 5.33169 4.01172 4.5426C5.19071 3.75352 6.57745 3.33228 7.99614 3.33228C9.41483 3.33228 10.8016 3.75352 11.9806 4.5426C13.1596 5.33169 14.0777 6.45308 14.6186 7.76461C14.6741 7.91422 14.6741 8.07879 14.6186 8.2284C14.0777 9.53993 13.1596 10.6613 11.9806 11.4504C10.8016 12.2395 9.41483 12.6607 7.99614 12.6607C6.57745 12.6607 5.19071 12.2395 4.01172 11.4504C2.83273 10.6613 1.91458 9.53993 1.37368 8.2284Z"
                                    stroke="white"
                                    strokeWidth="1.33275"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.99718 9.9957C9.10127 9.9957 9.99631 9.10066 9.99631 7.99657C9.99631 6.89248 9.10127 5.99744 7.99718 5.99744C6.89309 5.99744 5.99805 6.89248 5.99805 7.99657C5.99805 9.10066 6.89309 9.9957 7.99718 9.9957Z"
                                    stroke="white"
                                    strokeWidth="1.33275"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id={`clip0_view_${row.id}`}>
                                    <rect
                                      width="15.9931"
                                      height="15.9931"
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className="text-white text-sm font-normal font-['Inter'] leading-5">
                                View Details
                              </span>
                            </button>

                            <div
                              data-layer="Frame 31"
                              className="Frame31 self-stretch px-3 flex flex-col justify-start items-start gap-3"
                            >
                              <button
                                type="button"
                                onClick={() => setOpenDropdownId(null)}
                                className="Frame38 self-stretch inline-flex justify-start items-center gap-3 hover:bg-gray-50 rounded-md py-1.5 px-2 -mx-2 transition-colors"
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
                                <span className="text-gray-600 text-sm font-normal font-['Inter'] leading-5">
                                  Delete
                                </span>
                              </button>
                            </div>

                            <div
                              data-layer="Frame 32"
                              className="Frame32 self-stretch px-3 flex flex-col justify-start items-start gap-3"
                            >
                              <button
                                type="button"
                                onClick={() => setOpenDropdownId(null)}
                                className="Frame38 self-stretch inline-flex justify-start items-center gap-3 hover:bg-gray-50 rounded-md py-1.5 px-2 -mx-2 transition-colors"
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath={`url(#clip0_shield_${row.id})`}>
                                    <path
                                      d="M3.73346 7.00001L6.53346 9.33334L10.2668 4.66667M7.00013 0.466675L0.466797 4.20001V4.87201C0.466596 6.82958 1.10418 8.73393 2.28303 10.2967C3.46189 11.8596 5.11781 12.9958 7.00013 13.5333C8.88245 12.9958 10.5384 11.8596 11.7172 10.2967C12.8961 8.73393 13.5337 6.82958 13.5335 4.87201V4.20001L7.00013 0.466675Z"
                                      stroke="#4A5565"
                                      strokeWidth="0.9"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id={`clip0_shield_${row.id}`}>
                                      <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span className="text-gray-600 text-sm font-normal font-['Inter'] leading-5">
                                  Approve
                                </span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setOpenDropdownId(null)}
                                className="Frame39 self-stretch inline-flex justify-start items-center gap-3 hover:bg-gray-50 rounded-md py-1.5 px-2 -mx-2 transition-colors"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.99954 14.0953C11.3658 14.0953 14.0948 11.3663 14.0948 8.00002C14.0948 4.63372 11.3658 1.90479 7.99954 1.90479C4.63323 1.90479 1.9043 4.63372 1.9043 8.00002C1.9043 11.3663 4.63323 14.0953 7.99954 14.0953Z"
                                    stroke="#4A5565"
                                    strokeWidth="0.9"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M5.71289 5.71436L10.2843 10.2858M10.2843 5.71436L5.71289 10.2858"
                                    stroke="#4A5565"
                                    strokeWidth="0.9"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span className="text-gray-600 text-sm font-normal font-['Inter'] leading-5">
                                  Reject
                                </span>
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
      <div className="flex justify-between items-center">
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
    </div>
  );
};

export default RecruiterCompany;
