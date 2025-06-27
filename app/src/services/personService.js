import api from './api';

const getPersons = async (token) => {
    const res = await api.get('/persons', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

const getPersonById = async (id, token) => {
    const res = await api.get(`/persons/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

const createPerson = async (formData) => {
    const res = await api.post('/persons', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;
}

const updatePerson = async (id, formData, token) => {
    const res = await api.put(`/persons/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;
}

const deletePerson = async (id, token) => {
    const res = await api.delete(`/persons/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

export { getPersons, getPersonById, createPerson, updatePerson, deletePerson };