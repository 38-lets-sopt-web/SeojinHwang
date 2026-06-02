import axiosInstance from "./axiosInstance";

const http = {
  get: <T>(url: string, params?: object) => 
    axiosInstance.get<T>(url, { params }).then((res) => res.data),
  
  post: <T>(url: string, data?: object, params?: object) =>
    axiosInstance.post<T>(url, data, { params }).then((res) => res.data),

  delete: <T>(url: string, params?: object) =>
    axiosInstance.delete<T>(url, { params }).then((res) => res.data),
}

export default http;