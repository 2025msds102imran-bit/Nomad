import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating = 0, size = 11 }) => (
  <div className="flex items-center gap-[2px]">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={size}
        fill={i <= rating ? "#F59E0B" : "none"}
        stroke={i <= rating ? "#F59E0B" : "#D1D5DB"}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

export default StarRating;
