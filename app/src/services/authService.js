import api from './api';

// Login
const login = async (data) => {
    const res = await api.post('/users/login', data);
    return res.data;
}

// Registro
const register = async (formData) => {
    const res = await api.post('/users', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;
}

export { login, register };