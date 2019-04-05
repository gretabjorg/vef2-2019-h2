import { IProduct } from './types';

// Sækja slóð á API úr env
const baseurl:string | undefined = process.env.REACT_APP_API_URL;

async function getProduct(id: number | string) : Promise<IProduct> {
  // todo sækja vöru

  const product: IProduct = {
    category: {
      id: 10,
      title: "Flokkur",
    },
    id: 1,
    image: '',
    price: 100,
    title: "Prufuvara",
  };

  return new Promise((resolve) => resolve(product))
}

async function getProducts(limit: number, offset: number) {
  const path = `products${
    limit
      ? offset 
        ? `?limit=${limit}&offset=${offset}` : `?limit=${limit}`
      : offset
        ? `?offset=${offset}` : ''
  }`;
  console.log(path);
  const url = new URL(path, baseurl);
  const result = await fetch(url.href);
  return result.json();
}

export {
  getProduct,
  getProducts,
};
