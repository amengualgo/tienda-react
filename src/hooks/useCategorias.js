import {getCategories} from "../service/music-box-service";
import { useEffect, useState} from "react";
export  const useCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchCategoria() {
            await getCategories().then(
                function (value) {
                    setCategories([...value]);
                },
                function (error) {
                    throw  error;
                }
            );
        }
        fetchCategoria();
    },[]);
    return categories
}