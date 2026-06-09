import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#riasec',    label: 'RIASEC Profiles' },
  { href: '#adhd-lens', label: 'ADHD Lens'        },
  { href: '#avoid',     label: 'Avoid & Restructure' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__brand">🧠 RIASEC × ADHD</a>
        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="navbar__link">{l.label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
