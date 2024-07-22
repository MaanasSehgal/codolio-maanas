"use client";
// const Navbar = () => {
//     return (
//         <div className='flex w-full h-20 bg-red-500'>
//             nav
//         </div>
//     );
// }


import React, { useState } from 'react';
import { User } from 'lucide-react';
import ThemeSwitcher from '../ThemeSwitcher';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full p-5 md:px-24 bg-white dark:bg-gray-900 bg-opacity-10 dark:bg-opacity-10 backdrop-filter backdrop-blur-lg border-b-2 border-white border-opacity-20 flex justify-between items-center z-50 transition-transform duration-500">
            <a href='#' className="text-black dark:text-white text-xl font-semibold">
                FastZapp
            </a>

            <div className="flex items-center">
                <nav className={`navbar flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-9 absolute md:relative top-full right-0 w-full md:w-auto bg-white dark:bg-gray-900 bg-opacity-10 dark:bg-opacity-10 md:bg-transparent p-2 md:p-0 backdrop-filter backdrop-blur-lg md:backdrop-blur-none border-b-2 border-white border-opacity-20 md:border-0 z-50 transition-transform duration-500 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
                    <a href="#" className="text-black dark:text-white text-lg hover:text-red-500 transition-colors duration-300">Home</a>
                    <a href="#" className="text-black dark:text-white text-lg hover:text-red-500 transition-colors duration-300">Add Transaction</a>
                    <a href="#" className="text-black dark:text-white text-lg hover:text-red-500 transition-colors duration-300">Stats</a>
                </nav>

                <div className="flex items-center space-x-4 ml-4">
                    <ThemeSwitcher />
                    <Dropdown>
                        <DropdownTrigger>
                            <Button className="w-12 h-12 flex justify-center items-center text-sm bg-gray-200 dark:bg-gray-800 dark:text-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 text-black">
                                <User />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User actions">
                            <DropdownItem key="new">Your Profile</DropdownItem>
                            <DropdownItem key="copy">Settings</DropdownItem>
                            <DropdownItem key="edit">Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-3xl text-black dark:text-white md:hidden`} id="menu-icon" onClick={toggleMenu}></i>
                </div>
            </div>

            <div className={`nav-bg absolute top-20 left-0 w-full h-48 bg-white dark:bg-gray-900 bg-opacity-10 dark:bg-opacity-10 backdrop-filter backdrop-blur-lg border-b-2 border-white border-opacity-20 z-49 ${isMenuOpen ? 'block' : 'hidden'}`}></div>
        </header>
    );
};

export default Navbar;


{/* <ThemeSwitcher />
                    <Dropdown>
                        <DropdownTrigger>
                            <Button className="w-12 h-12 flex justify-center items-center text-sm bg-gray-200 dark:bg-gray-800 dark:text-black rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 text-black">
                                <User />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">New file</DropdownItem>
                            <DropdownItem key="copy">Copy link</DropdownItem>
                            <DropdownItem key="edit">Edit file</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown> */}