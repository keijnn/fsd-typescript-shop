const url = 'https://fakestoreapi.com/products'

export const getProducts = () => fetch(url).then((res) => res.json())
