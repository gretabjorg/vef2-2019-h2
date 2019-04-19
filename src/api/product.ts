import { baseurl, getPage } from './apiUtils';

async function getProducts(
  limit: number, offset: number, category: number, search: string
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

async function getProduct(id: number | string) {
  const path = `products/${id}`;

  const url = new URL(path, baseurl);
  const result = await fetch(url.href);
  return result.json();
}

async function getCategories(
  limit: number, offset: number, category: number
) {
  const id = category ? `${category}` : '';
  const page = getPage(limit, offset);

  const path = `categories/${id}${page}`;

  const url = new URL(path, baseurl);
  const result = await fetch(url.href);
  return result.json();
}

export {
  getProduct,
  getProducts,
  getCategories
}