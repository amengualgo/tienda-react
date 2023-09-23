import {createContext, useState} from "react";

export const CartContext = createContext([]);
function CartProviderMusicBox({children}){

    const [items, setItems] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //const products = useCartContext(items);
    const addItem=(amount, product)=>{
        /*buscar si el elemento existe ya en el carrito*/
        let indexFound = items.findIndex(value => Number(value.id) == Number(product.id));

        if(indexFound>=0){
            items[indexFound].amount += amount;
        }else{
            product.amount = amount;
            items.push(product);
        }
        let _cantidadTotal = 0;
        items.map(value => _cantidadTotal=_cantidadTotal + value.amount);
        setCantidadTotal(_cantidadTotal);
        setItems(items);
    };
    return(
        <CartContext.Provider value={{addItem:addItem,cantidadTotal:cantidadTotal}} >
            {children}
        </CartContext.Provider>
    )
}
export default CartProviderMusicBox;