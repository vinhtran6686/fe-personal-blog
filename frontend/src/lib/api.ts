import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define response interface
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// Define request functions
const api = {
  /**
   * GET request
   * @param url API endpoint
   * @param config Optional axios config
   * @returns Promise with data response
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await axiosInstance.get(url, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },

  /**
   * POST request
   * @param url API endpoint
   * @param data Request payload
   * @param config Optional axios config
   * @returns Promise with data response
   */
  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await axiosInstance.post(url, data, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },

  /**
   * PUT request
   * @param url API endpoint
   * @param data Request payload
   * @param config Optional axios config
   * @returns Promise with data response
   */
  async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await axiosInstance.put(url, data, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },

  /**
   * DELETE request
   * @param url API endpoint
   * @param config Optional axios config
   * @returns Promise with data response
   */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await axiosInstance.delete(url, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },

  // Set auth token for authenticated requests
  setAuthToken(token: string | null) {
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  },
};

// Add request interceptor for handling tokens, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add logic here like getting token from localStorage
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for handling errors, etc.
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 unauthorized errors (expired token, etc.)
    if (error.response && error.response.status === 401) {
      // Logout or refresh token logic
    }
    return Promise.reject(error);
  }
);

export default api; 