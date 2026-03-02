import React from "react";

const StatCard = ({ stat, Icon, className = "w-64" }) => (
  <div className={`${className} min-w-0 h-40 bg-white rounded-2xl outline-1 outline-gray-200/60 p-[17px] flex flex-col justify-between`}>
    <div className="flex justify-between items-center">
      <div className={`size-9 rounded-[10px] flex items-center justify-center ${stat.bgColor}`}>
        <Icon size={20} color={stat.iconColor} stroke={stat.iconColor} />
      </div>
      <div className="bg-emerald-50 rounded-sm px-2 py-0.5">
        <span className="text-emerald-600 text-[10px] font-bold leading-4 tracking-tight">{stat.pct}</span>
      </div>
    </div>
    <div className="text-gray-900 text-xl sm:text-2xl font-bold leading-7 sm:leading-8 tracking-tight">{stat.value}</div>
    <div className="text-gray-600 text-[11px] sm:text-xs font-medium leading-4 truncate">{stat.label}</div>
    <div className="text-gray-500 text-[10px] font-normal leading-4 tracking-tight">{stat.change}</div>
  </div>
);

export default StatCard;
