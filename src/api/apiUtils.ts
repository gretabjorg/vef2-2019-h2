export const baseurl:string | undefined = process.env.REACT_APP_API_URL;

export function getPage(limit: number, offset: number) {
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
