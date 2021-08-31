import axios from "axios";

const devUrl = "http://localhost:5000/api";
const prodUrl = "";

const URL = devUrl;
const config = { withCredentials: true };

export const apis = {
  urlRegister: `${URL}/auth/register`,
  urlLogin: `${URL}/auth/login`,
  urlLogout: `${URL}/auth/logout`,
  urlLoggedIn: `${URL}/auth/loggedin`,
  urlAdmin: `${URL}/admin`,

  register: async (data) => await axios.post(apis.urlRegister, data, config),
  login: async (data) => await axios.post(apis.urlLogin, data, config),
  logout: async () => await axios.post(apis.urlLogout, {}, config),
  loggedIn: async () => await axios.get(apis.urlLoggedIn, config),
  adminCreate: async (data) => await axios.post(apis.urlAdmin, data, config),
  adminFindOne: async (data) =>
    await axios.get(`${apis.urlAdmin}/${data}`, config),
};
