import React from "react";
import { useLocation } from "react-router-dom";

const AdminPlaceholderPage = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "page";
  const title = lastSegment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="bg-white rounded-2xl outline outline-1 outline-gray-200 p-8">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-500 mt-2">Admin section — coming soon.</p>
    </div>
  );
};

export default AdminPlaceholderPage;
