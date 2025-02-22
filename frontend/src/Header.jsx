import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="logo afacad-font">Nexus</div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                {isLoggedIn ? (
                    <button className="Logout" onClick={handleLogout}>Logout</button>
                ) : (
                    <button className="LogIn" onClick={() => navigate('/login')}>Login</button>
                )}
                {!isLoggedIn && <button className="SignUp" onClick={() => navigate('/signup')}>SignUp</button>}
                <button className="Profile" onClick={() => navigate('/profile')}>Profile</button>
                <button className="Bookings" onClick={() => navigate('/bookings')}>Bookings</button>
                <button className="Appointment" onClick={() => navigate('/appointment')}>Appointment</button>
            </nav>
        </div>
    );
};

export default Header;