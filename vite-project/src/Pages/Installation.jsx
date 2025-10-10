import React, { useState, useEffect } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [installedProducts, setInstalledProducts] = useState([]);
  // value format: "<field>-<asc|desc>"  e.g. "downloads-asc" or "size-desc"
  const [sortValue, setSortValue] = useState('downloads-asc');

  // helper to parse numbers from different formats: "1,234", "12k", "1.2M", "12 MB", number
  const parseNumber = (val) => {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    let s = String(val).trim().toLowerCase();
    s = s.replace(/,/g, '').replace(/\s+/g, '');

    // match plain number with optional suffix k/m/b
    const m = s.match(/^([\d.]+)(k|m|b)?$/);
    if (m) {
      let n = parseFloat(m[1]) || 0;
      const suf = m[2];
      if (suf === 'k') n *= 1e3;
      if (suf === 'm') n *= 1e6;
      if (suf === 'b') n *= 1e9;
      return n;
    }

    // fallback: extract first numeric part (useful for "12MB")
    const onlyNum = parseFloat(s.replace(/[^0-9.]/g, ''));
    return isNaN(onlyNum) ? 0 : onlyNum;
  };

  // load installed apps (on mount)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('installedProducts') || '[]');
    setInstalledProducts(stored);
  }, []);

  // listen to storage events (cross-tab) and custom event when ProductDetails updates localStorage
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'installedProducts') {
        setInstalledProducts(JSON.parse(e.newValue || '[]'));
      }
    };
    const onCustom = () => {
      const stored = JSON.parse(localStorage.getItem('installedProducts') || '[]');
      setInstalledProducts(stored);
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('installedProductsUpdated', onCustom);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('installedProductsUpdated', onCustom);
    };
  }, []);

  const handleUninstall = (id, name) => {
    const updated = installedProducts.filter(p => p.id !== id);
    localStorage.setItem('installedProducts', JSON.stringify(updated));
    setInstalledProducts(updated);
    // dispatch custom event so other open pages (if any) update
    window.dispatchEvent(new Event('installedProductsUpdated'));
    toast.info(`${name} has been uninstalled.`);
  };

  // sort according to sortValue
  const [field, order] = sortValue.split('-'); // e.g. ['downloads','asc']
  const sortedProducts = [...installedProducts].sort((a, b) => {
    const na = parseNumber(a[field]);
    const nb = parseNumber(b[field]);
    if (na === nb) {
      // stable tie-breaker by name
      return a.name?.localeCompare(b.name || '') || 0;
    }
    return order === 'asc' ? na - nb : nb - na;
  });

  return (
    
  <div className="bg-gray-100">
         <div className="max-w-6xl mx-auto p-6 sm:p-10 ">
      <div className='text-center mb-5'>
        <h1 className='text-2xl font-bold'>Your Installed Apps</h1>
        <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">
          {installedProducts.length} App{installedProducts.length !== 1 ? 's' : ''} Found
        </h1>
        <div>
          <label className="mr-2 font-medium">Sort by Size:</label>
          <select
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="downloads-asc"> Low to High</option>
            <option value="downloads-desc"> High to Low</option>
           
          </select>
        </div>
      </div>

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
              className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
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

  </div>
  );
};

export default Installation;
