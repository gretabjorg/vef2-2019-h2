import { baseurl } from './apiUtils';

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
  getCart,
  getCartLine,
  getOrder,
  getOrders,
  updateCartLine,
  deleteCartLine,
  postToCart,
  orderCart,
}