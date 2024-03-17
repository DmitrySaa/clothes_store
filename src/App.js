import React from "react";
import "./styles/App.css"
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";


function App() {

  return (

    <BrowserRouter>
        <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
