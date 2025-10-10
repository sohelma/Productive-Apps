import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet, useNavigation } from 'react-router-dom'; 
import LoadingSpinner from "../../Pages/LoadingSpinner";

const MainLayouts = () => {
    const navigation = useNavigation(); 

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1'>
                
                {navigation.state === 'loading' ? (
                    <LoadingSpinner />
                ) : (
                    <Outlet />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;
