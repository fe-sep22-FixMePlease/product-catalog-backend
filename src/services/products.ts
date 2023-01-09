import { phones } from "../api/phones";

export function getAll(page: string | number, perPage: string) {
    if (perPage === 'all') {
        return phones;
    };

    const from = +page === 1 
    ? 0 
    : +page * +perPage - 1;
    const to = from + +perPage;

    return  phones.slice(from, to);
}
