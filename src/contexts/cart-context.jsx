import {createContext, useState} from "react";
import {useCartContext} from "../hooks/useCartContext";

export const CartContext = createContext([]);
function CartProviderMusicBox({children}){

    const [items, setItems] = useState([]);

    const products = useCartContext(items);
    const addItem=(amount, product)=>{
        setItems( prev => [...prev, {amount, ...product}]);
    };
    return(
        <CartContext.Provider value={addItem}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProviderMusicBox;