import axios from "axios";
const instance = axios.create({
  baseURL: "https://burger-d5be3-default-rtdb.firebaseio.com/",
});
export default instance;
