import axios from "axios";
import Cookies from "js-cookie";

let headers = {};

if (typeof window !== "undefined") {
  headers = {
    Authorization: "bearer " + Cookies.get("accessToken"),
  };
}
export const axiosClient = axios.create({
  baseURL: "http://localhost:3008/api/dashboard/",
  headers: headers,
});
export default axiosClient;
