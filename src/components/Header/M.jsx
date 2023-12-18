import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../../shared/useOutsideClick';
import { motion, AnimatePresence } from 'framer-motion';

const M = () => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const variants = {
        open: { opacity: 1, y: 0, scale: 1 },
        closed: { opacity: 0, y: -10, scale: 0.9 },
    };

    useOutsideClick(dropdownRef, () => {
        setIsDropdownOpen(false);
    });

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className='border-b border-slate-200 shadow-md w-full bg-white'>
            <nav className='flex items-center justify-center'>
                <ul className='flex items-start justify-center gap-10'>
                    <li className='bg-slate-700 relative'>
                        <button
                            className='bg-purple-700 px-10 py-4 text-white'
                            onClick={toggleDropdown}
                        >
                            Click me 1
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    ref={dropdownRef}
                                    initial='closed'
                                    animate='open'
                                    exit='closed'
                                    variants={variants}
                                    className={`flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700`}
                                    onClick={(e) => e.stopPropagation()} // Stop propagation within the dropdown
                                >
                                    <button onClick={closeDropdown}>
                                        Close Dropdown
                                    </button>
                                    <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                                    <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                                    <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default M;
