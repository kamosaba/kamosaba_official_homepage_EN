'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass nav-container" style={{
            alignItems: 'center'
        }}>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#4ade80', zIndex: 1001 }}>
                Kamosaba
            </Link>

            <button
                className={`nav-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link href="/" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>Home</Link>
                <Link href="/news" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>News</Link>
                <Link href="/docs" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>Docs</Link>
                <Link href="/status" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>Status</Link>
                <Link href="/tos" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>Terms of Service</Link>
                <Link href="/policy" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>Privacy Policy</Link>
                <Link
                    href="https://discord.kamosaba.net/"
                    target="_blank"
                    className="glass"
                    style={{
                        padding: '8px 20px',
                        backgroundColor: '#5865F2',
                        borderColor: 'transparent',
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontWeight: 700,
                        color: 'white'
                    }}
                >
                    Join Discord
                </Link>
            </div>
        </nav>
    );
}
