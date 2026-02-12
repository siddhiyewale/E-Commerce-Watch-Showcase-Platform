import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const { state } = useCart();
  const cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'; 
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}, [darkMode]);

  return (
    <nav className="navbar">
      <h2 className="logo">⌛Eternal Hour</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart" className="cart-link">
          View Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
        <button onClick={toggleDarkMode} className="mode-btn">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Header;
