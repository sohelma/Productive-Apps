import React from 'react';
import { FaAppStore, FaGithub, FaGooglePlay } from "react-icons/fa";
import { useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../hooks/UseProducts';
const Home = () => {
    const {products,loading,error}=useProducts()

    const featuredProduct=products.slice (0, 8)
    console.log(products)
    return (

        <div className='text-center bg-gray-100 pt-12 '>
            <h1 className=' text-3xl lg:text-6xl font-bold '>We Build <br />
            <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='my-5 text-gray-500 italic'><span className='font-semibold'>At HERO.IO,</span>we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex items-center justify-center gap-2 my-5' >
                 <div >
                    <a href='https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/' className="btn"> <FaGooglePlay />Google Play</a>
                  </div>
                 <div>
                    <a href='https://developer.apple.com/app-store/marketing/guidelines/' className="btn"><FaAppStore />App Store</a>
                  </div>
            </div>
            <div className='flex items-center justify-center '>
                <img src="/assets/hero.png" alt="hero" style={{ width: '600px', maxWidth: '90%' }}/>
            </div>
            <div>
                <div className='text-center my-10'>
                    <h1 className='text-3xl font-bold'>Trending Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-20'>
                    {featuredProduct.map(product=>
                    <ProductCard key={product.id}product={product}/>
                    )}
                </div>
                <div className="card-actions justify-end">
      <button className="btn btn-primary mx-auto my-8">Show All</button>
    </div>
            </div>
            
        </div>
        
       
    );
};

export default Home;


