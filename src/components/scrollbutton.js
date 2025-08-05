// components/ScrollToTopButton.js
import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <button
            className="btn btn-primary position-fixed bottom-0 end-0 m-4"
            style={{ display: visible ? 'block' : 'none', zIndex: 999 }}
            onClick={scrollToTop}
        >
            ↑ 
        </button>
    );
}

export default ScrollToTopButton;
