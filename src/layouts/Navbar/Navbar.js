import React, { useState } from 'react';
import { Search } from "../../components/index";
import "./NavbarStyle.css";

const Navbar = () => {
    const navItems = ["Home", "TV Shows", "Movies", "New&Popular", "My List", "Browse by Language"];
    const [activeLink, setactiveLink] = useState("Home");

    return (
        <div className="navContainer">
            <ul className="navItems">
                <li className="navLogo">
                    <a href="#/">Netflix</a>
                </li>
                <li className="navDropdown">
                    Browse
                </li>
                <li className="navCaret"></li>
                <ul className="dropdownList">
                    <li className="navCaret-2"></li>
                    {navItems.map((item, i) => <li key={i} className={activeLink === item ? "navLink active" : "navLink"} onClick={() => setactiveLink(item)}>
                        <a href="#/" >
                            {item}
                        </a>
                    </li>)}
                </ul>
                <li className="NavSearch"><Search /></li>
            </ul>
        </div>
    )
}

export default Navbar;