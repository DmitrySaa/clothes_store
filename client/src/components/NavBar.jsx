import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Context } from '..';
import { Button, Nav } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import main_icon from '../assets/main_icon.png'

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
                <div className='d-flex align-items-center'>
                    <NavLink to={SHOP_ROUTE}>
                        <img alt="" width={60} src={main_icon} />
                    </NavLink>
                    <h2 className='me-5'>Магазин одежды</h2>
                </div>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant="success" onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <NavLink to={SHOP_ROUTE} className="ms-4">
                            <img alt="" width={50} src='https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade.png' />
                        </NavLink>
                        <Button variant={"outline-dark"} className='ms-2'>&#128157;</Button>
                        <Button variant="success" onClick={() => logOut()} className="ms-4">Выйти</Button>
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
