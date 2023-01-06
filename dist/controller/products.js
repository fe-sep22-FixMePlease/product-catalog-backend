import * as serviceProduct from "../services/products";
export const getAll = (req, res)=>{
    const products = serviceProduct.getAll();
    res.send(products);
};
