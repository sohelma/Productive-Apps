import React from 'react';
import { FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
             <div className="bg-[#001931] w-full sm:w-full px-4 sm:px-6 md:px-10 lg:px-20 ">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-gray-400 ">
                       <div className="px-2 py-8">
                            <h1 className="text-xl text-white mb-2">CS — Ticket System</h1>
                            <p>At HERO.IO,  we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                       </div>
                       <div className="px-2 py-8 space-y-2">
                        <h2 className="text-xl text-white mb-2">Company</h2>
                        <p>About Us</p>
                        <p>Our Mission</p>
                        <p>Contact Saled</p>
                       </div>
                       <div className="px-2 py-8 space-y-2">
                         <h2 className="text-xl text-white mb-2">Services</h2>
                        <p>Products & Services</p>
                        <p>Customer Stories</p>
                        <p>Download Apps</p>
                       </div>
                        <div className="px-2 py-8 space-y-2">
                         <h2 className="text-xl text-white mb-2">Information</h2>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Join Us</p>
                       </div>
                       <div className="px-2 py-8 space-y-2">
                         <h2 className="text-xl text-white mb-2">Social Links</h2>
                         
                            <div className="flex items-center gap-2 ">
                                <FaXTwitter className="bg-white text-black rounded-full text-2xl p-1 "/>
                                <span>@CS — Ticket System</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLinkedin className="bg-white text-black rounded-full text-2xl p-1"/>
                                <span>@CS — Ticket System</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaFacebook className="bg-white text-black rounded-full text-2xl p-1"/>
                                <span>@CS — Ticket System</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="bg-white text-black rounded-full text-2xl p-1"/>
                                <span>@CS — Ticket System</span>
                            </div>
                         
                             
                       </div>
            
                    </div>
            
                    <div className="text-center text-white mt-10 pb-6">© 2025 CS — Ticket System. All rights reserved.</div>
                  </div>
        </div>
    );
};

export default Footer;