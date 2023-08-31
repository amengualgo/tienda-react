import data from '../data/data.json'
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
        const element = data.filter(product =>  product.id === Number(id))[0]
        resolve(element)
        reject([])
    });
}

