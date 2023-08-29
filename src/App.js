import NavBarMusicBox from "./components/nav-bar/nav-bar";
import ItemListContainerMusicBox from "./components/item-list-container/item-list-container";
import React from "react";

function AppComponent() {
    return (
        <>
            <NavBarMusicBox />
            <ItemListContainerMusicBox title="Bienvenido!"
                                       grettings="Pronto encontrarás aqui todo lo que necesitas para tu carrera musical
                                       en un solo lugar!!!"/>
        </>
    );
}

export default AppComponent;