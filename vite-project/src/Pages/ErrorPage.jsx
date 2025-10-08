import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
    return (
        <>
        <Navbar/>
           
        <div className='text-center flex flex-col justify-center items-center'>
           <img src="/assets/error-404.png"alt="404 Not Found" style={{ width: '400px', maxWidth: '90%' }}/>
      <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
      <p className='my-3'>The page you are looking for is not available.</p>
      <button className="btn bg-[#9F62F2] text-white">Go Back!</button> 
        </div>

        <Footer />
        </>
    );
};

export default ErrorPage;