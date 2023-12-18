import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../../shared/useOutsideClick';
import './N.css';

const N = () => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useOutsideClick(dropdownRef, (event) => {
        if (!event.target.classList.contains('bg-purple-700')) {
            setIsDropdownOpen(false);
        }
    });

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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

                        <div
                            ref={dropdownRef}
                            className={`dropdown-content ${isDropdownOpen ? 'active' : 'inactive'}`}
                            onAnimationEnd={() => {
                                if (!isDropdownOpen) {
                                    dropdownRef.current.style.display = 'none';
                                }
                            }}
                            onAnimationStart={() => {
                                if (isDropdownOpen) {
                                    dropdownRef.current.style.display = 'block';
                                }
                            }}
                        >
                            <button onClick={toggleDropdown}>
                                Close Dropdown
                            </button>
                            <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                            <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                            <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default N;
