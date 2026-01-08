import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar navbar-expand-lg border-bottom mb-4">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">User Dashboard</Link>
                <button className="btn btn-outline-primary" onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
