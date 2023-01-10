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
    };

    return  product;
}
