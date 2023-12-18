import React, { useRef, useState, useEffect } from 'react';
import { useOutsideClick } from '../../shared/useOutsideClick';
import './E.css';

const E = () => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useOutsideClick(dropdownRef, () => {
        setIsDropdownOpen(false);
    });

    useEffect(() => {
        if (isDropdownOpen) {
            dropdownRef.current.style.display = 'block';
            setTimeout(() => {
                dropdownRef.current.classList.add('active');
            }, 50); // Adding a slight delay for smoother transition
        } else {
            dropdownRef.current.classList.remove('active');
            setTimeout(() => {
                dropdownRef.current.style.display = 'none';
            }, 300); // Equal to transition duration
        }
    }, [isDropdownOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
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
                            className={`dropdown-content bg-slate-700 absolute top-16 px-14 py-9`}
                        >
                            <button onClick={toggleDropdown}>
                                Close Dropdown
                            </button>
                            <a className='bg-red-500 px-5 py-4 block' href="https://google.com">Hello Google</a>
                            <a className='bg-red-500 px-5 py-4 block' href="https://google.com">Hello Google</a>
                            <a className='bg-red-500 px-5 py-4 block' href="https://google.com">Hello Google</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default E;
