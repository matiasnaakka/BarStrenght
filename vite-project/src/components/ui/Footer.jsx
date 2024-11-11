import React from 'react';
import { TextField, Button } from '@mui/material';

const Footer = () => {
    return (
        <div className="bg-black text-white p-8">
            {/* Main Footer Sections */}
            <div className="flex flex-col md:flex-row md:justify-between">
                
                {/* Support Column */}
                <div className="mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">SUPPORT</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-400">Return & Exchange</a></li>
                        <li><a href="#" className="hover:text-gray-400">Shipping Costs</a></li>
                        <li><a href="#" className="hover:text-gray-400">My Account</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Gift Cards</a></li>
                        <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                    </ul>
                </div>

                {/* Information Column */}
                <div className="mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">INFORMATION</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-400">Career</a></li>
                        <li><a href="#" className="hover:text-gray-400">Impressum</a></li>
                        <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-400">Refund Policy</a></li>
                    </ul>
                </div>

                {/* Subscription Section */}
                <div className="md:w-1/3">
                    <h2 className="text-lg font-semibold mb-4">SAVE 10% ON YOUR FIRST ORDER</h2>
                    <p className="text-gray-400 mb-4">
                        Receive an exclusive 10% voucher for your first order and always find out first about our brand new products & promotions in our newsletter.
                    </p>
                    <div className="flex flex-col space-y-2">
                        <TextField
                            label="Your email address"
                            variant="outlined"
                            color="warning"
                            focused
                            className="w-full mb-4"
                        />
                        <Button
                            variant="contained"
                            color="warning"
                            className="bg-orange-500 hover:bg-orange-600 text-white py-2 font-semibold rounded-md"
                        >
                            Subscribe + save 10% now!
                        </Button>
                    </div>
                </div>
            </div>

           
        </div>
    );
}

export default Footer;
