'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navItems, profile } from "../data/siteData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell">
        <Link href="/" className="brand-mark" onClick={() => setMenuOpen(false)}>
          <span className="brand-dot" aria-hidden="true" />
          <span>{profile.name}</span>
        </Link>

        <button
          onClick={toggleMenu}
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-label="Toggle navigation menu"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>

        <div className="nav-actions desktop-only">
          <ul className="nav-list" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
      >
        <ul className="mobile-list" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>

      {menuOpen ? <div className="mobile-backdrop" aria-hidden="true" /> : null}
    </header>
  );
};

export default Navbar;