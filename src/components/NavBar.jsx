import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='NavBar'>
            <li>
                <Link to="/">Главная</Link>
            </li>
            <li>
                <Link to="/profile">Профиль</Link>
            </li>
            <li>
                <Link to="/Auth">Авторизация</Link>
            </li>
            <li>
                <Link to="/registration">Регистрация</Link>
            </li>
        </div>
    );
}

export default NavBar;
