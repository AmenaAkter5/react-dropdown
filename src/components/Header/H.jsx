import React from 'react';
import './H.css';

const H = () => {
    return (
        <div className="stripe-container">
            <nav className='border-b border-slate-200 shadow-md w-full bg-white'>
                <nav className='flex items-center justify-center'>
                    <ul className='flex items-start justify-center gap-10'>
                        <li className='bg-slate-700 relative'>
                            <button className='bg-purple-700 px-10 py-4 text-white'>
                                Click me 1
                            </button>

                            <div className="stripe-animation">
                                <button>
                                    Close Dropdown
                                </button>
                            </div>

                            <div className="stripe-animation">
                                <a className='bg-red-500 px-5 py-4 block' href="https://google.com">
                                    Hello Google
                                </a>
                            </div>

                            <div className="stripe-animation">
                                <a className='bg-red-500 px-5 py-4 block' href="https://google.com">
                                    Hello Google
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </nav>
        </div>
    );
};

export default H;
