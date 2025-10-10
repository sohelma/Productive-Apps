import React from 'react';
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import useProducts from '../hooks/UseProducts';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
    const { products, loading, error } = useProducts();
    const navigate = useNavigate();

    const featuredProduct = products.slice(0, 8);

    return (
        <div className='text-center bg-gray-100 pt-12'>
            <h1 className='text-3xl lg:text-6xl font-bold'>
                We Build <br />
                <span className='text-[#632EE3]'>Productive</span> Apps
            </h1>
            <p className='my-5 text-gray-500 italic'>
                <span className='font-semibold'>At HERO.IO,</span> we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            <div className='flex items-center justify-center gap-2 my-5'>
                <div>
                    <a href='https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/' className="btn">
                        <FaGooglePlay /> Google Play
                    </a>
                </div>
                <div>
                    <a href='https://developer.apple.com/app-store/marketing/guidelines/' className="btn">
                        <FaAppStore /> App Store
                    </a>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <img src="/assets/hero.png" alt="hero" style={{ width: '600px', maxWidth: '90%' }}/>
            </div>

            <div className='text-white bg-[#632EE3] py-8'>
                <h1 className='text-2xl mb-5 font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around'>
                    <div>
                        <p>Total Downloads</p>
                        <h1 className='text-4xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Review</p>
                        <h1 className='text-4xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h1 className='text-4xl font-bold'>132+</h1>
                        <p>31 more will launch</p>
                    </div>
                </div>
            </div>

            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-20'>
                    {featuredProduct.map(product =>
                        <ProductCard key={product.id} product={product}/>
                    )}
                </div>
            )}

            {/* Show All button */}
            {!loading && (
                <div className="card-actions justify-center">
                    <button
                        className="btn btn-primary mx-auto my-8"
                        onClick={() => navigate('/apps')}
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;
