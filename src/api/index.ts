import { IProduct } from './types';

// Sækja slóð á API úr env
const baseurl:string | undefined = process.env.REACT_APP_API_URL;

function getPage(limit: Number, offset: Number) {
  return `${
    limit
    ? offset 
      ? `?limit=${limit}&offset=${offset}`
      : `?limit=${limit}`
    : offset
      ? `?offset=${offset}`
      : ''
  }`;
}

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

async function getProducts(
  limit: Number, offset: Number, category: Number, search: String
) {
  const page = getPage(limit, offset);
  const isPage = `${page ? '&' : '?'}`
  const query = `${
    search 
    ? category
      ? `${isPage}search=${search}&category=${category}`
      : `${isPage}search=${search}`
    : category
      ? `${isPage}category=${category}`
      : ''
  }`;

  const path = `products/${page}${query}`;

  const url = new URL(path, baseurl);
  const result = await fetch(url.href);
  return result.json();
}

async function getCategories(
  limit: Number, offset: Number, category: Number
) {
  const id = `${category ? `/${category}` : ''}`;
  const page = getPage(limit, offset);

  const path = `categories/${id}${page}`;

  const url = new URL(path, baseurl);
  const result = await fetch(url.href);
  return result.json();
}

export {
  getProduct,
  getProducts,
  getCategories,
};
