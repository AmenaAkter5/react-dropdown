import React, { useRef, useState } from 'react';
import { useOutside } from './useOutside';

const Nav = () => {
    const dropdownARef = useRef(null);
    const dropdownBRef = useRef(null);
    const [isDropdownAOpen, setIsDropdownAOpen] = useState(false);
    const [isDropdownBOpen, setIsDropdownBOpen] = useState(false);

    useOutside(dropdownARef, () => {
        setIsDropdownAOpen(false);
    });

    useOutside(dropdownBRef, () => {
        setIsDropdownBOpen(false);
    });


    return (
        <div>
            <nav className='flex items-center justify-center'>
                <ul className='flex items-start justify-center gap-10'>
                    <li className=' bg-slate-700 relative'>
                        <button className=' bg-purple-700 px-10 py-4 text-white' onClick={() => setIsDropdownAOpen(!isDropdownAOpen)}>
                            Click me 1
                        </button>
                        {isDropdownAOpen &&
                            <div ref={dropdownARef} className="dropdown-menus flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700">
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
                    <li className=' bg-slate-700'>
                        <button className=' bg-orange-600 px-10 py-5' onClick={() => setIsDropdownBOpen(!isDropdownBOpen)}>
                            Click me 2
                        </button>
                        {isDropdownBOpen &&
                            <div ref={dropdownBRef} className='dropdown-menus flex flex-col gap-3 border border-red-500'>
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
                    <li className=' bg-slate-700 py-3 px-4'>
                        <button>
                            Click me 2
                        </button>
                        <div className='dropdown-menus flex flex-col gap-3 border border-red-500'>
                            <button>manik</button>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                        </div>
                    </li>
                    <li className=' bg-slate-700 py-3 px-4'>
                        <button>
                            Click me 3
                        </button>
                        <div className='dropdown-menus flex flex-col gap-3 border border-red-500'>
                            <button>manik</button>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                            <a href="https://google.com">Hello Google</a>
                        </div>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Nav;