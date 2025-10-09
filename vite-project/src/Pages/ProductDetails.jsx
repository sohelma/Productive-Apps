import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/UseProducts';
import { FaDownload } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const [installed, setInstalled] = useState(false);

  if (loading) return <p className="text-center my-10">Loading ...</p>;
  if (error) return <p className="text-center my-10">Error loading products.</p>;

  const product = products.find(p => String(p.id) === id);
  if (!product) return <p className="text-center my-10">Product not found</p>;

  const { name, icon, downloads, rating, developer, description, size, ratingsBreakdown } = product;

  const handleInstallClick = () => {
    setInstalled(true);
    toast.success(`${name} has been installed successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 sm:p-10 my-10 rounded-xl shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <img src={icon} alt={name} className="w-32 h-32 object-contain rounded-xl border p-2 bg-gray-50" />
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-500 mt-1">Developed by <span className="font-semibold">{developer}</span></p>
          <div className="flex gap-4 mt-2">
            <span className="flex items-center gap-1 text-green-600"><FaDownload /> {downloads}</span>
            <span className="text-amber-600">⭐ {rating}</span>
            <span>{size} MB</span>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstallClick}
            disabled={installed}
            className={`mt-4 px-4 py-2 rounded ${
              installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {installed ? 'Installed' : 'Install Now'}
          </button>
        </div>
      </div>

      {/* Ratings chart */}
      {ratingsBreakdown && (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Ratings</h2>
          <div className="space-y-1">
            {Object.entries(ratingsBreakdown).map(([star, value]) => (
              <div key={star} className="flex items-center gap-2">
                <span className="w-12 text-sm">{star}⭐</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-amber-500 rounded"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
                <span className="w-12 text-sm text-gray-500">{value}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div>
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-700 whitespace-pre-line">{description}</p>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
