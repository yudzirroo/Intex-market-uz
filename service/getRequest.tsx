import { API } from "./hooks/getEnv";

const getRequest = (url: string) => {
  return fetch(`${API}${url}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

export default getRequest;
