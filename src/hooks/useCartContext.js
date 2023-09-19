
import { useEffect} from "react";
export  const useCartContext = (items) => {
    useEffect(() => {
        console.log(items);
    },[items]);

}