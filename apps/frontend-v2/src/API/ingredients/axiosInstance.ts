import axios from "axios"

// const AxiosInstance = axios.create(
//   typeof document !== "undefined" ? { baseUrl:  getApiBase() } : {}
// )
const AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001/'
})

export default AxiosInstance