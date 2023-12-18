import React, { useRef, useState, useEffect } from 'react';
import { useOutsideClick } from '../../shared/useOutsideClick';
import { motion, useAnimation } from 'framer-motion';

const L = () => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const controls = useAnimation();

    const variants = {
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        closed: {
            opacity: 0,
            y: -10,
            scale: 0.9,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        // You can define more variants for different animations here
        // For example, you can add a 'bounce' variant or a 'slideIn' variant
    };

    useEffect(() => {
        if (isDropdownOpen) {
            controls.start('open');
        } else {
            controls.start('closed');
        }
    }, [isDropdownOpen, controls]);

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

                        <motion.div
                            ref={dropdownRef}
                            animate={controls}
                            initial='closed'
                            variants={variants}
                            className={`flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700`}
                        >
                            <button onClick={() => setIsDropdownOpen(false)}>
                                Close Dropdown
                            </button>
                            <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                            <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                            <a className='bg-red-500 px-5 py-4' href="https://google.com">Hello Google</a>
                        </motion.div>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default L;
