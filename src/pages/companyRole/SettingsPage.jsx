import React from 'react';

const SettingsPage = () => {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-500 mt-1">Manage your account preferences</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="Nomad User"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              defaultValue="user@nomadrecruitment.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input
              type="text"
              defaultValue="Nomad Recruitment"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm">
              <option>Company</option>
              <option>Recruiter</option>
              <option>Agency</option>
            </select>
          </div>
        </div>
        <button className="mt-6 bg-gradient-to-r from-[#0F172A] to-[#334F90] text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:shadow-lg transition">
          Save Changes
        </button>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Notifications</h3>
        <div className="space-y-4">
          {[
            { label: 'Email notifications for new candidates', defaultChecked: true },
            { label: 'Payment status updates', defaultChecked: true },
            { label: 'Weekly activity summary', defaultChecked: false },
            { label: 'Marketing and feature updates', defaultChecked: false },
          ].map((item) => (
            <label key={item.label} className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-700">{item.label}</span>
              <input
                type="checkbox"
                defaultChecked={item.defaultChecked}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
