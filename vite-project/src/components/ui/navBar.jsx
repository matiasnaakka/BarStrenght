import React from 'react';
import BarstrengthLogo from '../../assets/Barstrenght.webp';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    return (
        <div className="p-5 text-white bg-black">
            <div className="flex items-center justify-between">

                {/* Left Section - Navigation Links */}
                <ul className="font-raleway flex space-x-8 text-lg ml-6">
                    <li><a className="hover:animate-pulse" href="">Home</a></li>
                    <li><a className="hover:animate-pulse" href="">Products</a></li>
                    <li><a className="hover:animate-pulse" href="">Account</a></li>
                    <li><a className="hover:animate-pulse" href="">Cart</a></li>
                </ul>

                {/* Center Section - Logo and Text */}
                <div className="flex items-center space-x-2 mx-auto">
                    <a href="">
                        <img className="h-8 w-8" src={BarstrengthLogo} alt="BarStrength Logo" />
                    </a>
                    <p className="font-raleway text-3xl font-semibold">BARSTRENGHT</p>
                </div>

                {/* Right Section - Utility Links */}
                <div className="flex space-x-6 mr-6">
                    <LanguageIcon />
                    <SearchIcon />
                    <AccountCircleIcon/>
                    <ShoppingCartIcon />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
