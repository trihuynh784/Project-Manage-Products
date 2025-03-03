const API_DOMAIN = "http://localhost:3002/";
// const API_DOMAIN = "https://dummyjson.com/";

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  // const response = await fetch(`${API_DOMAIN}${path}"?skip=120&limit=16"`);
  const result = await response.json();
  return result;
}