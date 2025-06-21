import http from "./http";

export const getAll = async (endpoint) => {
  try {
    const response = await http.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de ${endpoint}:`, error);
    throw error;
  }
};

export const getById = async (endpoint, id) => {
  try {
    const response = await http.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de ${endpoint}/${id}:`,
      error
    );
    throw error;
  }
};

export const create = async (endpoint, data) => {
  try {
    const response = await http.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la création dans ${endpoint}:`, error);
    throw error;
  }
};

export const update = async (endpoint, id, data) => {
  try {
    const response = await http.put(`${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de ${endpoint}/${id}:`, error);
    throw error;
  }
};

export const deleteItem = async (endpoint, id) => {
  try {
    const response = await http.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de ${endpoint}/${id}:`, error);
    throw error;
  }
};
