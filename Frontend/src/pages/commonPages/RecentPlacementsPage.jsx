import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Search, X } from "lucide-react";
import { placements } from "../../data/dummyData";

const ROWS_PER_PAGE = 7;

const STATUS_STYLES = {
  Completed: "bg-emerald-100 text-emerald-800",
  "In Progress": "bg-blue-50 text-blue-800",
};

const RecentPlacementsPage = () => {
  const location = useLocation();
  const basePath = location.pathname.startsWith("/recruiter") ? "/recruiter" : "/dashboard";
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return placements;
    const q = searchQuery.toLowerCase();
    return placements.filter(
      (p) =>
        p.candidateName.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        p.company.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE));
  const paginatedRows = filtered.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE,
  );
  const startEntry = filtered.length === 0 ? 0 : (currentPage - 1) * ROWS_PER_PAGE + 1;
  const endEntry = Math.min(currentPage * ROWS_PER_PAGE, filtered.length);

  return (
    <div className="flex flex-col gap-6 min-w-0 overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <Link
          to={basePath}
          className="inline-flex items-center gap-2 text-cyan-900 text-sm sm:text-base font-medium leading-6 w-fit"
        >
          <ArrowLeft size={20} stroke="#2A4870" />
          Back to Dashboard
        </Link>
        <h1 className="text-gray-900 text-xl sm:text-2xl font-semibold leading-7 sm:leading-8">
          Recent Placements
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm font-normal leading-4 sm:leading-5">
          Latest successes
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl outline-[1.38px] outline-gray-100 px-4 sm:px-6 pt-4 sm:pt-6 pb-4 sm:pb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 relative">
            <Search
              size={20}
              stroke="#4A5565"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search placements..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full h-12 pl-12 pr-4 py-3 rounded-[10px] outline-[1.38px] outline-gray-200 text-base font-normal text-neutral-950 placeholder:text-neutral-950/50"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex-1 sm:flex-none sm:w-32 h-12 bg-cyan-900 rounded-[10px] flex items-center justify-center gap-2 text-white text-base font-normal">
              <Search size={20} stroke="white" />
              Search
            </button>
            <button
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="flex-1 sm:flex-none sm:w-28 h-12 bg-white rounded-[10px] outline-[1.38px] outline-gray-200 flex items-center justify-center gap-2 text-slate-900 text-base font-normal"
            >
              <X size={20} stroke="#0F172A" />
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl outline-[1.30px] outline-gray-100 overflow-hidden">
        <div>
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-200 h-14">
                <th className="text-left pl-6 pr-3 text-gray-600 text-xs font-semibold leading-4 whitespace-nowrap">
                  Candidate Name
                </th>
                <th className="text-left px-3 text-gray-600 text-xs font-semibold leading-4 whitespace-nowrap">
                  Role
                </th>
                <th className="text-left px-3 text-gray-600 text-xs font-semibold leading-4 whitespace-nowrap">
                  Company Name
                </th>
                <th className="text-left px-3 text-gray-600 text-xs font-semibold leading-4 whitespace-nowrap">
                  Salary
                </th>
                <th className="text-left px-3 text-gray-600 text-xs font-semibold leading-4 whitespace-nowrap">
                  Time
                </th>
                <th className="text-left px-3 text-gray-600 text-xs font-semibold leading-4 whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedRows.length === 0 ? (
                <tr className="h-16">
                  <td colSpan={6} className="text-center text-gray-400 text-sm py-8">
                    No placements found
                  </td>
                </tr>
              ) : (
                paginatedRows.map((row) => (
                  <tr key={row.id} className="h-16 border-b border-gray-100">
                    <td className="pl-6 pr-3 text-gray-600 text-sm font-medium leading-5 whitespace-nowrap">
                      {row.candidateName}
                    </td>
                    <td className="px-3 text-gray-600 text-sm font-medium leading-5 whitespace-nowrap">
                      {row.role}
                    </td>
                    <td className="px-3 text-gray-600 text-sm font-medium leading-5 whitespace-nowrap">
                      {row.company}
                    </td>
                    <td className="px-3 text-gray-600 text-sm font-medium leading-5 whitespace-nowrap">
                      {row.salary}
                    </td>
                    <td className="px-3 text-gray-600 text-sm font-medium leading-5 whitespace-nowrap">
                      {row.time}
                    </td>
                    <td className="px-3">
                      <span
                        className={`inline-flex items-center justify-center w-20 h-6 rounded-full text-xs font-medium leading-4 ${STATUS_STYLES[row.status] || "bg-gray-100 text-gray-800"}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="text-gray-600 text-sm font-normal leading-5">
          Showing {startEntry} to {endEntry} of {filtered.length} entries
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-24 h-10 bg-white rounded-lg outline-[1.30px] outline-gray-200 text-center text-gray-600 text-sm font-medium leading-5 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`size-10 rounded-lg text-center text-sm font-medium leading-5 ${
                currentPage === page
                  ? "bg-cyan-900 outline-[1.30px] outline-cyan-900 text-white"
                  : "bg-white outline-[1.30px] outline-gray-200 text-gray-600"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-16 h-10 bg-white rounded-lg outline-[1.30px] outline-gray-200 text-center text-gray-600 text-sm font-medium leading-5 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentPlacementsPage;
