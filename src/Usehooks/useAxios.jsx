import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://assignment-10-server-brown-beta.vercel.app",
});
const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
