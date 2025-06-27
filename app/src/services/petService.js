import api from './api';

export const getPets = async () => {
    const res = await api.get('/pets');
    return res.data;
}

export const searchPetsByName = async (name) => {
    const res = await api.get(`/pets/search?name=${name}`);
    return res.data;
}

export const filterPets = async (params) => {
    const res = await api.get('/pets/filter', { params });
    return res.data;
}

export const getPetById = async (id) => {
    const res = await api.get(`/pets/${id}`);
    return res.data;
}

export const createPet = async (formData, token) => {
    const res = await api.post('/pets', formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;
}

const updatePet = async (id, formData, token) => {
    const res = await api.put(`/pets/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;
}

const deletePet = async (id, token) => {
    const res = await api.delete(`/pets/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

export { getPets, getPetById, createPet, updatePet, deletePet, searchPetsByName, filterPets };
