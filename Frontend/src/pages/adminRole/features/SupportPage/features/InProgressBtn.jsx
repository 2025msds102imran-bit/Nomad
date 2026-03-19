import React from 'react';

const InProgressBtn = ({ statusFilter, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      data-layer="in progress"
      className={`InProgress w-full text-left justify-start text-base font-normal font-['Inter'] ${statusFilter === "in progress" ? "text-neutral-950" : "text-neutral-950/50"}`}
    >
      in progress
    </button>
  );
};

export default InProgressBtn;
