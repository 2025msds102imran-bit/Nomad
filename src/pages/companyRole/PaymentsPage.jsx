import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

const payments = [
  { id: 1, description: 'Full Stack Engineer - John Doe', amount: '$8,500', date: 'Feb 20, 2026', status: 'Completed', type: 'out' },
  { id: 2, description: 'UX Designer - Sarah Mitchell', amount: '$6,500', date: 'Feb 18, 2026', status: 'In Escrow', type: 'escrow' },
  { id: 3, description: 'Product Manager - Maria Garcia', amount: '$8,000', date: 'Feb 15, 2026', status: 'In Escrow', type: 'escrow' },
  { id: 4, description: 'React Developer - James Chen', amount: '$10,000', date: 'Feb 10, 2026', status: 'Completed', type: 'out' },
];

const PaymentsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Payments</h2>
        <p className="text-gray-500 mt-1">Track your payment history and escrow status</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <ArrowUpRight size={20} />
            </div>
            <span className="text-sm text-gray-500">Total Paid</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">$18,500</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock size={20} />
            </div>
            <span className="text-sm text-gray-500">In Escrow</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">$14,500</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <CreditCard size={20} />
            </div>
            <span className="text-sm text-gray-500">Total Transactions</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">4</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Description</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Date</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.description}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{payment.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      payment.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {payment.status}
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

export default PaymentsPage;
