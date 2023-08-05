import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarMusicBox from "./components/nav-bar/nav-bar";
import ItemListContainerMusicBox from "./components/item-list-container/item-list-container";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavBarMusicBox />
      <ItemListContainerMusicBox title={"Bienvenido!"}
                                 grettings={"Pronto encontrarás aqui todo lo que necesitas para tu carrera musical en un " +
                                     "solo lugar!!!"}/>
  </React.StrictMode>
);
reportWebVitals();
