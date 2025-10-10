import React from 'react';
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, icon, rating, category, downloads,id} = product;

  return (
    <Link to={`/productdetails/${id}`}>
    <div className="card bg-white w-full sm:w-72 md:w-64 lg:w-72 xl:w-75 shadow-md hover:shadow-xl rounded-2xl p-4 transition-all duration-300 border border-gray-100 mx-auto p-4 sm:p-6 md:p-8 ">
        
      
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
   </Link>
  );
};

export default ProductCard;
