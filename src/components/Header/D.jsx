import React, { useRef, useState, useEffect } from 'react';
import { useOutsideClick } from '../../shared/useOutsideClick';

const D = () => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownStyle, setDropdownStyle] = useState({ opacity: 0, transform: 'translateY(-10px)', transition: 'opacity 0.3s, transform 0.3s' });

    useEffect(() => {
        if (isDropdownOpen) {
            setDropdownStyle({ opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.3s, transform 0.3s' });
        } else {
            setDropdownStyle({ opacity: 0, transform: 'translateY(-10px)', transition: 'opacity 0.3s, transform 0.3s' });
        }
    }, [isDropdownOpen]);

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
                            style={dropdownStyle}
                            className={`flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700`}
                        >
                            <button onClick={() => setIsDropdownOpen(false)}>
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

export default D;
