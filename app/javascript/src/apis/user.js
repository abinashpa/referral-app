import axios from "axios";

const usersUrl = "/users/";

const signUp = payload => axios.post(usersUrl, payload);
const signIn = payload => axios.post(`${usersUrl}sign_in`, payload);
const signOut = payload => axios.delete(`${usersUrl}sign_out`, payload);

const usersApi = {
  signUp,
  signIn,
  signOut,
};

export default usersApi;
