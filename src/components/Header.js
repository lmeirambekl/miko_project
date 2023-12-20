import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Header.css";

function Header() {
  const [selectedSection, setSelectedSection] = useState("");
  const navigate = useNavigate();

  const handleSectionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSection(selectedValue);
    navigate(`/${selectedValue.toLowerCase()}`);
  };

  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="https://seeklogo.com/images/R/rede-multi-market-logo-2C6D9B93A9-seeklogo.com.png"
          alt="Logo"
        />
      </Link>
      <ul className="nav_bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li className="selectM">
          <select value={selectedSection} onChange={handleSectionChange}>
            <option value="Market"><Link to="/market">Market</Link> </option>
            <option value="Drinks"><Link to="/drinks">Drinks</Link></option>
            <option value="Gastronomy"><Link to="/gastronomy">Gastronomy</Link></option>
            <option value="Grocery"><Link to="/grocery">Grocery</Link></option>
            <option value="Non"><Link to="/non">Non-food</Link></option>
            <option value="vafd"><Link to="/vafd">VAFD</Link></option>
          </select>
        </li>

        <li className="user-icon">
  <Link to="/signin">
    <img
      className="user-icon-img"
      src="https://cdn.icon-icons.com/icons2/1904/PNG/512/profile_121261.png" 
      alt="User Icon"
    />
  </Link>
  <div className="user-dropdown">
    <Link to="/signin">Sign In</Link>
    <Link to="/signup">Sign Up</Link>
  </div>
</li>

      </ul>
    </header>
  );
}

export default Header;
