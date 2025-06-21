import { create, deleteItem, getAll, getById, update } from "./baseService";

const ENDPOINT = "/Flottes";

const validateFlotteData = (data) => {
  if (!data.typeFlotte || !data.matriculeFlotte) {
    throw new Error("Le type et le matricule de la flotte sont obligatoires");
  }
  return true;
};

export const getAllFlottes = () => getAll(ENDPOINT);

export const getFlotteById = (id) => getById(ENDPOINT, id);

export const createFlotte = async (flotteData) => {
  validateFlotteData(flotteData);
  return create(ENDPOINT, flotteData);
};

export const updateFlotte = async (id, flotteData) => {
  validateFlotteData(flotteData);
  return update(ENDPOINT, id, flotteData);
};

export const deleteFlotte = (id) => deleteItem(ENDPOINT, id);

const flotteService = {
  getAll: getAllFlottes,
  getById: getFlotteById,
  create: createFlotte,
  update: updateFlotte,
  delete: deleteFlotte,
};

export default flotteService;
