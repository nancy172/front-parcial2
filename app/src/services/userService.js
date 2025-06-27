import api from './api';

const getUsers = async (token) => {
    const res = await api.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
}

const getUserById = async (id, token) => {
    const res = await api.get(`/users/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

const updateUser = async (id, formData, token) => {
    const res = await api.put(`/users/${id}`, formData, {
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        },
    });
    return res.data;
};

const deleteUser = async (id, token) => {
    const res = await api.delete(`/users/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

export { getUsers, getUserById, updateUser, deleteUser };