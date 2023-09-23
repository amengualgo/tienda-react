import {createContext, useState} from "react";

export const CartContext = createContext([]);
function CartProviderMusicBox({children}){

    const [items, setItems] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
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

    const clear=()=>{
        setItems([]);
        setCantidadTotal(0);
    }


    const removeItem = id => {
        debugger
        const itemsFiltered = items.filter(item => item.id != id);
        let _cantidadTotal = 0;
        itemsFiltered.map(value => _cantidadTotal=_cantidadTotal + value.amount);

        setCantidadTotal(_cantidadTotal);
        setItems(itemsFiltered);
    }
    return(
        <CartContext.Provider value={{addItem:addItem,cantidadTotal:cantidadTotal, items:items, removeItem:removeItem, clear:clear}} >
            {children}
        </CartContext.Provider>
    )
}
export default CartProviderMusicBox;