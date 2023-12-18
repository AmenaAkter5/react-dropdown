import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../../shared/useOutsideClick';
import './A.css';

const A = () => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useOutsideClick(dropdownRef, () => {
        setIsDropdownOpen(false);
    });

    return (
        <nav className='border-b border-slate-200 shadow-md w-full bg-white'>
            <nav className='flex items-center justify-center'>
                <ul className='flex items-start justify-center gap-10'>
                    <li className='bg-slate-700 relative'>
                        <button
                            className='bg-purple-700 px-10 py-4 text-white'
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Click me 1
                        </button>

                        <div
                            ref={dropdownRef}
                            className={`flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700 ${isDropdownOpen ? 'scale-enter' : 'scale-leave'
                                }`}
                        >
                            <button onClick={() => setIsDropdownOpen(false)}>manik</button>
                            <a className='bg-red-500 px-5 py-4' href='https://google.com'>
                                Hello Google
                            </a>
                            <a className='bg-red-500 px-5 py-4' href='https://google.com'>
                                Hello Google
                            </a>
                            <a className='bg-red-500 px-5 py-4' href='https://google.com'>
                                Hello Google
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default A;
