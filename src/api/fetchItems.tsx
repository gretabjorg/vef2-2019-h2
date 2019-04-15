import { useState, useEffect } from 'react';

/**
 * Custom hook sem sér um að framkvæma api köll sem skila
 * itemum
 * @param apiCall api kall sem á að framkvæma
 * @param args viðföng í api kall
 */
export default function useGetter(apiCall: Function, initialState: any, ...args:any[]) {
  const [ data, setData ] = useState(initialState);
  useEffect(() => {
    const fetchData = async () => {
      const result = await apiCall(...args);
      setData(result);
    }
    fetchData();
  },[...args]);

  return data;
}
