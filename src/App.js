import NavBarMusicBox from "./components/nav-bar/nav-bar";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from "./components/item-list-container/item-list-container";
import ItemDetailContainer from "./components/item-detail-container/item-detail-container";
import Error404 from "./components/error-404/error-404";
import CartProviderMusicBox from "./contexts/cart-context";
import CheckOutMusicBox from "./components/checkout/checkout-brief";

function AppComponent() {
    return (
        <>
            <CartProviderMusicBox>
                <BrowserRouter>
                    <NavBarMusicBox />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/contact" element={<></>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/escuela" element={<></>} />
                        <Route path="/eventos" element={<></>} />
                        <Route path="/check-out" element={<CheckOutMusicBox />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </BrowserRouter>
            </CartProviderMusicBox>
        </>
    );
}

export default AppComponent;