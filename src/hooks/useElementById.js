import {getElementById} from "../service/music-box-service";
import { useEffect, useState} from "react";


export  const useElementById= (id) => {
    const [element, setElement] = useState(null);
    useEffect(() => {
        async function fetchElements() {
            if(id) {
                await getElementById(id).then(
                    function (value) {
                        if (value)
                            setElement(value);
                    },
                    function (error) {
                        throw  error;
                    }
                );
            }
        }
        fetchElements();
    },[id]);
    return element
}