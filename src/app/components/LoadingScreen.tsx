'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait a bit after the page is loaded, then hide the screen
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-wrapper ${!loading ? 'hidden' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">Kamosaba</div>
                <div className="loader-bar">
                    <div className="loader-progress"></div>
                </div>
            </div>
        </div>
    );
}
