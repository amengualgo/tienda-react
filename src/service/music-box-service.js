import data from '../data/data.json'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDhfASRBQRAZHW-DCEaDA8-mCwtWcGclXs",
    authDomain: "musicboxstore-23a50.firebaseapp.com",
    projectId: "musicboxstore-23a50",
    storageBucket: "musicboxstore-23a50.appspot.com",
    messagingSenderId: "293146753565",
    appId: "1:293146753565:web:42aec7bdd16b5c84bd24f4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const categories = data.map(producto => producto.categoria);
        const categoriesMenu = [... new Set(categories.sort())];
        resolve(categoriesMenu)
        reject([])
    });
}
export const getElementsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        const elements = data.filter(product =>  product.categoria === category)
        resolve(elements)
        reject([])
    });
}
export const getAllElements = () => {
    return new Promise((resolve, reject) => {
        const elements = data
        resolve(elements)
        reject([])
    });
}
export const getElementById = (id) => {
    return new Promise((resolve, reject) => {
        const element = data.find(product =>  product.id === Number(id))
        resolve(element)
        reject({})
    });
}

