import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/UseProducts';
import { FaDownload } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList
} from 'recharts';

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
    try {
      const installedApps = JSON.parse(localStorage.getItem('installedProducts') || '[]');
      if (installedApps.some(p => p.id === product.id)) {
        toast.info(`${name} is already installed.`);
        setInstalled(true);
        return;
      }
      const updated = [...installedApps, product];
      localStorage.setItem('installedProducts', JSON.stringify(updated));
      window.dispatchEvent(new Event('installedProductsUpdated'));
      setInstalled(true);
      toast.success(`${name} has been installed successfully!`, { position: "top-right", autoClose: 3000 });
    } catch (err) {
      console.error('Install failed:', err);
      toast.error('Failed to install app.');
    }
  };

  // Prepare chart data
  const chartData = ratingsBreakdown
    ? Object.entries(ratingsBreakdown)
        .map(([star, value]) => ({ star: `${star}⭐`, count: value }))
        .sort((a, b) => a.star.localeCompare(b.star)) // ensure 1⭐ to 5⭐
    : [];

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

          <button
            onClick={handleInstallClick}
            disabled={installed}
            className={`mt-4 px-4 py-2 rounded ${
              installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 text-white'
            }`}
          >
            {installed ? 'Installed' : 'Install Now'}
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      {chartData.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Ratings</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" label={{ value: "Percentage", position: "insideBottomRight", offset: 0 }} />
              <YAxis dataKey="star" type="category" width={60} />
              <Tooltip />
              <Bar dataKey="count" fill="#f59e0b" >
                <LabelList dataKey="count" position="right" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Description */}
      <div>
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-700 whitespace-pre-line">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
