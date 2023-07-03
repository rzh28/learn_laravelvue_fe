import api from "./api";

const resource = "/api/v1/task";

export const getTasks = () => api.get(resource);

export const createTasks = (task) => api.post(resource, task);

export const updateTasks = (id, task) => api.put(`${resource}/${id}`, task);

export const removeTasks = (id) => api.delete(`${resource}/${id}`);

export const byIdTasks = (id) => api.get(`${resource}/${id}`);

export const complateTasks = (id, task) =>
  api.put(`${resource}/${id}/complate`, task);
