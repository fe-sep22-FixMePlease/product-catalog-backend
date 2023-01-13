import _ from "lodash";
import path from "path";
import fs from 'fs';
import { phones } from "../api/phones";
import { Product } from "../types/phone";

export function getAll(
    page: string | number, 
    perPage: string,
    sortType: keyof Product | undefined,
    categories: keyof Product | undefined) {

    if (perPage === 'all') {
        return phones;
    };

    const from = +page === 1 
    ? 0 
    : +page * +perPage - 1;

    const to = from + +perPage;

    let product = phones.slice(from, to);

    if (categories) {
        product = product.filter(prod => prod.category === categories);
    } else {
        product = [];
        return product;
    };

    if (sortType) {
        if (sortType === 'year') {
            return _.orderBy(product, [sortType]).reverse();
        }
        product = _.orderBy(product, [sortType]);
    } 

    return  product;
}

const addStaticImageLink = (productData: any) => {
    const staticImages = productData.images
        .map((imgLink:string) => `https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${imgLink}`);
    
    return {...productData, images: staticImages};
};

export function getOneById(productId: string) {
    // const productPath = `src/api/phones/${productId}.json`;
    const productPath = `src/api/phones/${productId}.json`;
    
    try {
        const productData = fs.readFileSync(
            path.resolve(productPath), 'utf8',
          );

          const productStaticData = addStaticImageLink(JSON.parse(productData));
          
          return JSON.stringify(productStaticData);
    } catch(e) {
        return JSON.stringify(e);
    }
}

export function getNewests(category: string) {
    let products = phones;

    if (category) {
        products = products.filter(prod => prod.category === category);
    }

    const lastYearOfProduct = Math.max(...products.map(product => product.year));

    products = products.filter(product => product.year === lastYearOfProduct);

    return products;
}
