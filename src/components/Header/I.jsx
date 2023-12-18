import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../../shared/useOutsideClick';
import './I.css'; // Assuming you have a CSS file for Header styles

const I = () => {
    const dropdownARef = useRef(null);
    const [isDropdownAOpen, setIsDropdownAOpen] = useState(false);

    useOutsideClick(dropdownARef, () => {
        setIsDropdownAOpen(false);
    });

    return (
        <nav className='border-b border-slate-200 shadow-md w-full bg-white'>
            <nav className='flex items-center justify-center'>
                <ul className='flex items-start justify-center gap-10'>
                    <li className='bg-slate-700 relative'>
                        <button className='bg-purple-700 px-10 py-4 text-white' onClick={() => setIsDropdownAOpen(!isDropdownAOpen)}>
                            Click me 1
                        </button>
                        <div ref={dropdownARef} className={`dropdown-content flex flex-col gap-6 ${isDropdownAOpen ? 'active' : ''}`}>
                            <button className='my-6' onClick={() => setIsDropdownAOpen(false)}>manik</button>
                            <a className='bg-red-500 px-5 py-4 block' href="https://google.com">Hello Google</a>
                            {/* Add more links here */}
                        </div>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default I;
