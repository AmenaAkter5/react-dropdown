import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../../shared/useOutsideClick';

const Header = () => {
    const dropdownARef = useRef(null);
    const dropdownBRef = useRef(null);
    const dropdownCRef = useRef(null);
    const dropdownDRef = useRef(null);
    const [isDropdownAOpen, setIsDropdownAOpen] = useState(false);
    const [isDropdownBOpen, setIsDropdownBOpen] = useState(false);
    const [isDropdownCOpen, setIsDropdownCOpen] = useState(false);
    const [isDropdownDOpen, setIsDropdownDOpen] = useState(false);

    useOutsideClick(dropdownARef, () => {
        setIsDropdownAOpen(false);
    });

    useOutsideClick(dropdownBRef, () => {
        setIsDropdownBOpen(false);
    });

    useOutsideClick(dropdownCRef, () => {
        setIsDropdownCOpen(false);
    });

    useOutsideClick(dropdownDRef, () => {
        setIsDropdownDOpen(false);
    });


    return (
        <nav className=' border-b border-slate-200 shadow-md fixed top-0 w-full bg-white'>
            <nav className='flex items-center justify-center'>
                <ul className='flex items-start justify-center gap-10'>
                    <li className=' bg-slate-700 relative'>
                        <button className='bg-purple-700 px-10 py-4 text-white' onClick={() => setIsDropdownAOpen(!isDropdownAOpen)}>
                            Click me 1
                        </button>
                        {isDropdownAOpen &&
                            <div ref={dropdownARef} className="flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700">
                                <button onClick={() => setIsDropdownAOpen(false)}>manik</button>
                                <a className=' bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                                <a className=' bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                                <a className=' bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                                <a className=' bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                                <a className=' bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                                <a className=' bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                            </div>
                        }
                    </li>
                    <li className='bg-slate-700'>
                        <button className='bg-orange-600 px-10 py-4' onClick={() => setIsDropdownBOpen(!isDropdownBOpen)}>
                            Click me 2
                        </button>
                        {isDropdownBOpen &&
                            <div ref={dropdownBRef} className='flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700'>
                                <button>manik</button>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                            </div>
                        }
                    </li>
                    <li className='bg-slate-700'>
                        <button onClick={() => setIsDropdownCOpen(!isDropdownCOpen)} className='bg-purple-700 px-10 py-4 text-white'>
                            Click me 3
                        </button>
                        {isDropdownCOpen &&
                            <div ref={dropdownCRef} className='flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700'>
                                <button>manik</button>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                            </div>
                        }
                    </li>
                    <li>
                        <button className='bg-orange-600 px-10 py-4' onClick={() => setIsDropdownDOpen(!isDropdownDOpen)}>
                            Click me 4
                        </button>
                        {isDropdownDOpen &&
                            <div ref={dropdownDRef} className='flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700'>
                                <button>manik</button>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                                <a href="https://google.com">Hello Google</a>
                            </div>
                        }
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default Header;