// components/OutsideClickHandler.js

import { useEffect, useRef } from 'react';

const OutsideClickHandler = ({ onOutsideClick, children }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onOutsideClick();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onOutsideClick]);

    return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;
