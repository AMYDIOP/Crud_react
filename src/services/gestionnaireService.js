import { create, deleteItem, getAll, getById, update } from "./baseService";

const ENDPOINT = "/Gestionnaires";

const validateGestionnaireData = (data, isUpdate = false) => {
  if (
    !data.cniGestionnaire ||
    !data.title ||
    !data.firstname ||
    !data.lastname ||
    !data.email
  ) {
    throw new Error("Tous les champs obligatoires doivent être remplis");
  }

  /*   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error("L'email n'est pas valide");
  } */

  if (!isUpdate && !data.passwordHash) {
    throw new Error("Le mot de passe est obligatoire");
  }

  return true;
};

const prepareGestionnaireData = (data, isUpdate = false) => {
  const payload = {
    ...data,
    role: "User",
  };

  if (isUpdate && !payload.passwordHash) {
    delete payload.passwordHash;
  }

  return payload;
};

export const getAllGestionnaires = () => getAll(ENDPOINT);

export const getGestionnaireById = async (id) => {
  const gestionnaire = await getById(ENDPOINT, id);
  if (gestionnaire.passwordHash) {
    delete gestionnaire.passwordHash;
  }
  return gestionnaire;
};

export const createGestionnaire = async (gestionnaireData) => {
  validateGestionnaireData(gestionnaireData, false);
  const payload = prepareGestionnaireData(gestionnaireData, false);
  return create(ENDPOINT, payload);
};

export const updateGestionnaire = async (id, gestionnaireData) => {
  validateGestionnaireData(gestionnaireData, true);
  const payload = prepareGestionnaireData(gestionnaireData, true);
  return update(ENDPOINT, id, payload);
};

export const deleteGestionnaire = (id) => deleteItem(ENDPOINT, id);

const gestionnaireService = {
  getAll: getAllGestionnaires,
  getById: getGestionnaireById,
  create: createGestionnaire,
  update: updateGestionnaire,
  delete: deleteGestionnaire,
};

export default gestionnaireService;
