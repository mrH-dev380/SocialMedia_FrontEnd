import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:3000" })

export const timelinePost = (id) => API.get(`/post/${id}/timeline`);
export const like = (id, userId) => API.put(`/post/${id}/like`, userId)