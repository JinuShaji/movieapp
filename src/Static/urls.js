import { API_KEY } from "./Static";
import { base_url } from "./Static";
export const comedy = `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const originalas = `${base_url}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=28`;
