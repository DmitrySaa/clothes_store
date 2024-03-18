import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Context } from '..';
import { Button,  Nav } from 'react-bootstrap';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (

        <div className='NavBar'>
            <NavLink to={SHOP_ROUTE}>
                <img width={60} src='https://img.freepik.com/premium-vector/pug-dog-face-isolated-on-a-white-background-svg-vector-illustration_793674-174.jpg' />
            </NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button variant="success">Профиль</Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button href={LOGIN_ROUTE} variant="secondary">Регистрация</Button>
                    <Button variant="secondary">О нас</Button>
                </Nav>
            }
        </div>
    );
})

export default NavBar;
