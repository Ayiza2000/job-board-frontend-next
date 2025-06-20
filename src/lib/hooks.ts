import axios, { AxiosInstance } from 'axios';
import { Job, JobInput } from '@/types/job';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('token')
    : null;

  if (token) {
    config.headers = config.headers ?? {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export function useJobs() {
  const list = () => api.get<Job[]>('/jobs').then(res => res.data);
  const get = (id: string) => api.get<Job>(`/jobs/${id}`).then(res => res.data);
  const create = (data: JobInput) => api.post<Job>('/jobs', data).then(res => res.data);
  const update = (id: string, data: JobInput) => api.put<Job>(`/jobs/${id}`, data).then(res => res.data);
  const remove = (id: string) => api.delete<void>(`/jobs/${id}`);

  return { list, get, create, update, remove };
}

export default api;
