import React from 'react';
import { FaAppStore, FaGithub, FaGooglePlay } from "react-icons/fa";
const Home = () => {
    return (
        <div className='text-center mt-12'>
            <h1 className='text-6xl font-bold '>We Build <br />
            <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='my-5 text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex items-center justify-center gap-2 my-5' >
                 <div >
                    <a href='https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/' className="btn"> <FaGooglePlay />Google Play</a>
                  </div>
                 <div>
                    <a href='https://developer.apple.com/app-store/marketing/guidelines/' className="btn"><FaAppStore />App Store</a>
                  </div>
            </div>
            <div className='flex items-center justify-center ' >
                <img src="/assets/hero.png" alt="hero" style={{ width: '600px', maxWidth: '90%' }}/>
            </div>
        </div>
    );
};

export default Home;