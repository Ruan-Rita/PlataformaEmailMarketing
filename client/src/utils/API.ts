import axios from "axios";
import { config } from "../env-example";

function authHeader() {
  const token = localStorage.getItem("token");
  console.log("entassso", token);
  let header: any = "";
  if (token && token != "") {
    header = { Authorization: `Bearer  ${token}` };
  }
  console.log("final", header);
  return header;
}

const instance = axios.create({
  baseURL: config.API,

  headers: {
    ...authHeader(),
    "Content-Type": "application/json; multipart/form-data",
  },
});

const Axios: any = instance;

export const API = async (method: string, path: string, data: any = null) => {
  return returnCustom(
    await Axios[method](path, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        return error;
      })
  );
};

async function returnCustom(response: any) {
  let error = false;
  let data: boolean | string = false;

  if (response.message) {
    if (!response.response) {
      error = response.message;
      data = "Erro de Network";
    } else {
      error = response.response;
      data = response.response.data.user_message;
    }
  } else {
    data = response.data;
  }
  console.log(`API REQUEST: `, data, error);
  return {
    data: error ? error : data,
    error,
  };
}
