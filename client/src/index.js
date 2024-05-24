import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ClothesStore from './store/ClothesStore';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Context = createContext(null)
console.log()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        clothes: new ClothesStore()
    }}>
        <App/>
    </Context.Provider>
);

