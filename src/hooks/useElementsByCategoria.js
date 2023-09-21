import {getAllElements, getElementsByCategory} from "../service/music-box-service";
import { useEffect, useState} from "react";


export  const useElementsByCategory = (categoria) => {
    const [elements, setElements] = useState([]);
    useEffect(() => {
        async function fetchElements() {
            if(categoria) {
                await getElementsByCategory(categoria).then(
                    function (value) {
                        if (value)
                            setElements(value)
                    },
                    function (error) {
                        throw  error;
                    }
                );
            }else {
                await getAllElements().then(
                    function (value) {
                        if (value)
                            setElements(value)
                    },
                    function (error) {
                        throw  error;
                    }
                );
            }
        }
        fetchElements();
    },[categoria]);
    return elements
}