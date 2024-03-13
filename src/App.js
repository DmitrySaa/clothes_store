import React from "react";
import "./styles/App.css"
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";


function App() {

  return (

    <BrowserRouter>
      <div>
        <NavBar /> {/* Вставляем NavBar */}
        {/* Добавьте другие компоненты и маршруты здесь */}
      </div>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
