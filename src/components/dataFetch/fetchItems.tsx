import React, { useState, useEffect } from 'react';

/**
 * Custom hook sem sér um að framkvæma api köll sem skila
 * itemum
 * @param apiCall api kall sem á að framkvæma
 * @param args viðföng í api kall
 */
export default function useItemGet(apiCall: Function, ...args:any[]) {
  const [ data, setData ] = useState({
    limit: 0,
    offset: 0,
    items: [],
    links: {
      self: {
        href: {}
      },
      next: {
        href: {}
      }
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiCall(...args);
      setData(result);
    }
    fetchData();
  },[]);

  console.log(data);

  return data;
}