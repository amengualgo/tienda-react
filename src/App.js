import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Accordion from 'react-bootstrap/Accordion';
import NavBarMusicBox from "./components/nav-bar/nav-bar";
import ItemListContainerMusicBox from "./components/item-list-container/item-list-container";
import React from "react";

function BasicExample() {
    return (
        <>
            <NavBarMusicBox />
            <ItemListContainerMusicBox title="Bienvenido!"
                                       grettings="Pronto encontrarás aqui todo lo que necesitas para tu carrera musical
                                       en un solo lugar!!!"/>
        </>
    );
}

export default BasicExample;