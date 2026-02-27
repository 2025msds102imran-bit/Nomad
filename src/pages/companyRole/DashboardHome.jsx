import React from 'react';
import { Briefcase, Users, CreditCard, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Active Jobs', value: '12', icon: Briefcase, change: '+3 this week', color: 'bg-blue-50 text-blue-600' },
  { label: 'Candidates', value: '48', icon: Users, change: '+8 this week', color: 'bg-green-50 text-green-600' },
  { label: 'Pending Payments', value: '$24,500', icon: CreditCard, change: '3 in escrow', color: 'bg-amber-50 text-amber-600' },
  { label: 'Success Rate', value: '94%', icon: TrendingUp, change: '+2% vs last month', color: 'bg-purple-50 text-purple-600' },
];

const recentActivity = [
  { action: 'New candidate submitted', detail: 'Senior React Developer - by TechRecruit Ltd', time: '2 hours ago' },
  { action: 'Payment released', detail: '$8,500 for Full Stack Engineer placement', time: '5 hours ago' },
  { action: 'Job posted', detail: 'Product Manager - London, UK', time: '1 day ago' },
  { action: 'Offer accepted', detail: 'UX Designer - Sarah Mitchell', time: '2 days ago' },
];

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-500 mt-1">Here's what's happening with your recruitment.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon size={20} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              <p className="text-xs text-green-600 mt-2">{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="divide-y divide-gray-100">
          {recentActivity.map((item, i) => (
            <div key={i} className="py-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900">{item.action}</p>
                <p className="text-sm text-gray-500 mt-0.5">{item.detail}</p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
