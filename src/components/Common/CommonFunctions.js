// import axios from "axios";

// const Axios = axios.create({
//   baseURL: 'http://localhost:3000'
// });
// // Add a request interceptor
// Axios.interceptors.request.use(
//   function (config) {
//     config.headers = {
//       ...config.headers,
//       authorization: `${
//         sessionStorage.getItem("authToken") || localStorage.getItem("authToken")
//       }`
//     };
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
// export default Axios;