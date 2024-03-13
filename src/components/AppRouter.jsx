import React from "react"
import { Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";


const AppRouter = (props) => {
    const isAuth = true;

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}

            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
        </Routes>
    )
};

export default AppRouter;
