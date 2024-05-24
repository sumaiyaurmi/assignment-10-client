import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "",
});
const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
