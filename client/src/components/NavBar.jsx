import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Context } from '..';
import { Button,  Nav } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (

        <div className='NavBar'>
            <div className='NavBar_items'>
            <NavLink to={SHOP_ROUTE}>
                <img alt="" width={60} src='https://img.freepik.com/premium-vector/pug-dog-face-isolated-on-a-white-background-svg-vector-illustration_793674-174.jpg' />
            </NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button variant="success" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                    <Button variant="success" onClick={() => logOut()} className="ms-2">Выйти</Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button onClick={() => navigate(LOGIN_ROUTE)} variant="secondary">Войти</Button>
                    <Button variant="secondary" className="ms-2">О нас</Button>
                </Nav>
            }
            </div>
        </div>
    );
})

export default NavBar;
