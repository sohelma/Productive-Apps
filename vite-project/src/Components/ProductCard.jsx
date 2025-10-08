import React from 'react';
import { FaDownload } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name, icon, rating, category, downloads } = product;

  return (
    
    <div className="card bg-white w-full max-w-sm sm:w-80 md:w-80 shadow-md hover:shadow-xl rounded-2xl p-4 transition-all duration-300 border border-gray-100 mx-auto">
        
      
      {/* Image */}
      <figure className="bg-gray-50 p-4 rounded-xl">
        <img
          src={icon}
          alt={name}
          className="w-28 h-28 object-contain mx-auto"
        />
      </figure>

      {/* Body */}
      <div className="card-body text-left mt-3 space-y-2 px-2">

        {/* Top Row: Category - Title */}
        <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
          <span className="truncate max-w-[45%]">{category}</span>
          <span className="truncate max-w-[45%] text-right">{name}</span>
        </div>

        {/* Bottom Row: Downloads - Rating */}
        <div className="flex justify-between items-center mt-2 text-sm font-semibold">
          <span className="flex items-center gap-1 text-green-600 truncate max-w-[45%]">
            <FaDownload /> {downloads}
          </span>
          <span className="text-amber-600 truncate max-w-[45%] text-right">⭐ {rating}</span>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
