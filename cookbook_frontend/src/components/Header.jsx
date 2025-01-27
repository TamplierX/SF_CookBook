import React from "react";
import { NavLink } from "react-router";

import '../styles/Header.css';


const Header = () => {
    return (
        <header className="header">
            <div className="container-container">
                <div className="header__inner">
                    <div className="logo">
                        <h1>Кулинарная книга</h1>
                    </div>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <NavLink className="menu__list-link" to="/" end>Главная страница</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;