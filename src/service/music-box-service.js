
import { initializeApp } from "firebase/app";
import  { getFirestore, getDocs, collection, query, where } from "firebase/firestore"
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
const db = getFirestore();
export const getCategories = () => {
    return new Promise((resolve, reject) => {
        let categories = [];
        const categoriesMenu = getDocs(collection(db, 'products')).then((snapshot=>{
            snapshot.docs.map(value => {categories.push(value.data().categoria)});
            return [... new Set(categories.sort())];
        }));
        resolve(categoriesMenu)
        reject([])
    });
}
export const getElementsByCategory = (category) => {
    return new Promise(async (resolve, reject) => {
        let elements = [];
        const q = query(collection(db, "products"), where("categoria", "==", category));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            elements.push(doc.data());
        });
        resolve(elements);
        reject([])
    });
}
export const getAllElements = () => {
    return new Promise(async (resolve, reject) => {
        let elements = [];
        await getDocs(collection(db, 'products')).then((snapshot => {
            snapshot.docs.map(value => elements.push(value.data()));
        }));
        resolve(elements)
        reject([])
    });
}
export const getElementById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let element = {};
            const q = query(collection(db, "products"), where("id", "==", Number(id)));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
               element = doc.data();
            });
            resolve(element)
            reject({})
        } catch (e) {
            console.log(e);
            return {}
        }

    });
}

