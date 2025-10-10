import React, { useState } from 'react';
import useProducts from '../hooks/UseProducts';
import ProductCard from '../Components/ProductCard';



const Apps = () => {
    const{products}=useProducts()
    const[search,setSearch]=useState('')
    const term=search.trim ().toLocaleLowerCase()
    const searchedProducts=term? products.filter(product=>product.name.toLocaleLowerCase().includes(term)):products
   

    return (
     <div className='text-center bg-gray-100 pt-12  '>
                 <h1 className='text-center text-4xl font-bold mt-10'>Our All Applications</h1>
                <p className='text-center text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center py-5 px-4 sm:px-6 md:px-10 lg:px-20 '>
                 <div className='text-xl font-semibold'>({searchedProducts.length}) Apps Found
                </div>  
                <div>
                    <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/ 2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                     </svg>
                        <input value={search}onChange={e=>setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                        </label>
                </div>
                
            </div>
                 <div>  
                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-20'>
                         {searchedProducts.map(product=>
                         <ProductCard key={product.id}product={product}/>
                         )}
                     </div>
                     
                 </div>
                 
             </div>
    );
};

export default Apps;