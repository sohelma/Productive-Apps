import React, { useState, useEffect } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [installedProducts, setInstalledProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // default ascending

  // Load installed apps from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('installedProducts') || '[]');
    setInstalledProducts(stored);
  }, []);

  // Uninstall handler
  const handleUninstall = (id, name) => {
    const updated = installedProducts.filter(p => p.id !== id);
    localStorage.setItem('installedProducts', JSON.stringify(updated));
    setInstalledProducts(updated);
    toast.info(`${name} has been uninstalled.`);
  };

  // Sort apps by size
  const sortedProducts = [...installedProducts].sort((a, b) => {
    if (sortOrder === 'asc') return a.size - b.size;
    return b.size - a.size;
  });

  return (
    
    <div className="max-w-6xl mx-auto p-6 sm:p-10 bg-gray-100">
        <div className='text-center mb-5'>
            <h1 className='text-2xl font-bold'>Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
      {/* Header with count and sort */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">{installedProducts.length} App{installedProducts.length !== 1 ? 's' : ''} Found</h1>
        <div>
          <label className="mr-2 font-medium">Sort by Size:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Installed apps list */}
      <div className="space-y-4">
        {sortedProducts.map(product => (
          <div key={product.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center gap-4">
              <img src={product.icon} alt={product.name} className="w-16 h-16 object-contain rounded border p-1 bg-gray-50" />
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex gap-2 items-center text-sm text-gray-500">
                  <span className="flex items-center gap-1 text-green-600"><FaDownload /> {product.downloads}</span>
                  <span className="flex items-center gap-1 text-amber-500"><FaStar /> {product.rating}</span>
                  <span>{product.size} MB</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleUninstall(product.id, product.name)}
              className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
            >
              Uninstall
            </button>
          </div>
        ))}

        {installedProducts.length === 0 && (
          <p className="text-center text-gray-500">No apps installed.</p>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Installation;
