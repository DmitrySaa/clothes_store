import React from "react";
import "./styles/App.css"
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Shop from "./pages/Shop";


function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
