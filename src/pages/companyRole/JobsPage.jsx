import React from 'react';
import { Plus, Search } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Senior React Developer', location: 'Remote', budget: '$8,000 - $12,000', candidates: 5, status: 'Active' },
  { id: 2, title: 'Product Manager', location: 'London, UK', budget: '$6,000 - $10,000', candidates: 3, status: 'Active' },
  { id: 3, title: 'UX Designer', location: 'New York, US', budget: '$5,000 - $8,000', candidates: 7, status: 'Active' },
  { id: 4, title: 'DevOps Engineer', location: 'Berlin, DE', budget: '$7,000 - $11,000', candidates: 2, status: 'Draft' },
];

const JobsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Jobs</h2>
          <p className="text-gray-500 mt-1">Manage your open positions</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#0F172A] to-[#334F90] text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg transition">
          <Plus size={18} />
          Post New Job
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Job Title</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Location</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Budget</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Candidates</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition cursor-pointer">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{job.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.budget}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.candidates}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      job.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
