import axios, { AxiosInstance } from 'axios';

interface AppAxiosConfig {
  baseURL: string;
}

const appAxiosConfig: AppAxiosConfig = {
  baseURL: process.env.BASE_URL || 'http://localhost:8080',
};

export const app: AxiosInstance = axios.create(appAxiosConfig);