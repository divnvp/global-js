import { api } from "./api.js";

export const fetchDescription = async () => {
  const response = await fetch(api.baseUrl + "/?type=lucky");

  return await response.text();
}
