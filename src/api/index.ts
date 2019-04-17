// Sækja slóð á API úr env
const baseurl:string | undefined = process.env.REACT_APP_API_URL;

function getPage(limit: number, offset: number) {
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

async function getProduct(id: number | string) {
  const path = `products/${id}`;

  const url = new URL(path, baseurl);
  const result = await fetch(url.href);
  return result.json();
}

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

async function postLogin(username: string, password: string) {
  const path = 'users/login';
  const url = new URL(path, baseurl);

  const user = {
    username,
    password
  }

  const result = await fetch(url.href, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': "application/json",
    },
    body:JSON.stringify(user),
  });

  return result.json();
}

async function postRegister(username: String, password: String, email: String) {
  const path = 'users/register';
  const url = new URL(path, baseurl);

  const user = {
    username,
    password,
    email
  }
  console.log(user);
  const result = await fetch(url.href, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': "application/json",
    },
    body:JSON.stringify(user),
  });

  return result.json();
}

async function getCart(token: string) {
  const url = new URL('cart', baseurl);
  const result = await fetch(url.href, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return result.json();  
}

async function getCartLine(token: string, id: number) {
  const url = new URL(`cart/line/${id}`, baseurl);
  const result = await fetch(url.href, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return result.json();  
}

async function updateCartLine(token: string, id: number, quantity: number) {
  const path = `cart/line/${id}`;
  const url = new URL(path, baseurl);

  const result = await fetch(url.href, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      "quantity":parseInt(String(quantity))
    })
  });
  const json = await result.json();
  return json;
}

async function deleteCartLine(token: string, id: number) {
  const path = `cart/line/${id}`;
  const url = new URL(path, baseurl);
  await fetch(url.href, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

async function postToCart(token: String, product: Number, quantity: Number) {
  const path = `/cart`;
  const url = new URL(path, baseurl);

  const cart = {
    product,
    "quantity":parseInt(String(quantity))
  }

  const result = await fetch(url.href, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json"
    },
    body: JSON.stringify(cart)
  });
  
  const json = await result.json();
  return json;
}

async function orderCart(token: string, name: string, address: string) {
  const path = 'orders';
  const url = new URL(path, baseurl);

  const result = await fetch(url.href, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json"
      },
    body: JSON.stringify({
      "name":name,
      "address":address
    })
  });

  return result.json();
}

async function getOrders(token: string) {
  const path = 'orders';
  const url = new URL(path, baseurl);
  const result = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return result.json();
}

async function getOrder(token: string, id: number) {
  const path = `orders/${id}`;
  const url = new URL(path, baseurl);
  const result = await fetch(url.href, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return result.json();
}

export {
  getProduct,
  getProducts,
  getCategories,
  postRegister,
  getCartLine,
  getCart,
  postLogin,
  updateCartLine,
  deleteCartLine,
  postToCart,
  orderCart,
  getOrders,
  getOrder,
};
