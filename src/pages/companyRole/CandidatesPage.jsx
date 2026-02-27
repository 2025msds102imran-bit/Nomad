import React from 'react';
import { Search } from 'lucide-react';

const candidates = [
  { id: 1, name: 'Sarah Mitchell', role: 'UX Designer', recruiter: 'DesignHire Co', fee: '$6,500', status: 'Under Review' },
  { id: 2, name: 'James Chen', role: 'Senior React Developer', recruiter: 'TechRecruit Ltd', fee: '$10,000', status: 'Interview' },
  { id: 3, name: 'Maria Garcia', role: 'Product Manager', recruiter: 'PM Talent Agency', fee: '$8,000', status: 'Offer Sent' },
  { id: 4, name: 'Alex Kim', role: 'DevOps Engineer', recruiter: 'CloudHire', fee: '$9,500', status: 'Under Review' },
];

const statusColors = {
  'Under Review': 'bg-yellow-50 text-yellow-700',
  'Interview': 'bg-blue-50 text-blue-700',
  'Offer Sent': 'bg-green-50 text-green-700',
  'Hired': 'bg-purple-50 text-purple-700',
};

const CandidatesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Candidates</h2>
        <p className="text-gray-500 mt-1">Review submitted candidates and their proposals</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search candidates..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F172A] to-[#334F90] flex items-center justify-center text-white font-semibold text-sm">
                  {candidate.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{candidate.name}</p>
                  <p className="text-sm text-gray-500">{candidate.role}</p>
                </div>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[candidate.status]}`}>
                {candidate.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
              <span>By {candidate.recruiter}</span>
              <span className="font-semibold text-gray-900">{candidate.fee}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatesPage;
