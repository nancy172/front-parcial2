import api from './api';

const getRefuges = async (token) => {
    const res = await api.get('/refuges', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

const getRefugeById = async (id, token) => {
    const res = await api.get(`/refuges/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

const createRefuge = async (formData) => {
    const res = await api.post('/refuges', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;
}

const updateRefuge = async (id, formData, token) => {
    const res = await api.put(`/refuges/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;
}

const deleteRefuge = async (id, token) => {
    const res = await api.delete(`/refuges/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

export { getRefuges, getRefugeById, createRefuge, updateRefuge, deleteRefuge };