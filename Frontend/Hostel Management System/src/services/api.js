import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });


API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const loginAPI = (formData) => API.post('/auth/login', formData);

export const registerAPI = (formData) => API.post('/auth/register', formData);

export const fetchRoomsAPI = () => API.get('/rooms');

export const createRoomAPI = (roomData) => API.post('/rooms', roomData);

export const fetchComplaintsAPI = () => API.get('/complaints');

export const fileComplaintAPI = (complaintData) =>
  API.post('/complaints', complaintData);

export default API;