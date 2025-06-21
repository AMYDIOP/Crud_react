import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { gestionnaireService } from "../../services";

export default function Edit(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    cniGestionnaire: "",
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    passwordHash: "",
    idGestionnaire: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetchGestionnaire();
  }, []);
  const fetchGestionnaire = async () => {
    try {
      const data = await gestionnaireService.getById(id);
      setInputs({
        cniGestionnaire: data.cniGestionnaire,
        title: data.title,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        passwordHash: "", // Ne pas afficher le mot de passe
        idGestionnaire: data.idGestionnaire,
      });
    } catch (error) {
      Swal.fire(
        "Erreur",
        "Impossible de récupérer les données du gestionnaire.",
        "error"
      );
    }
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitForm = async () => {
    try {
      await gestionnaireService.update(id, inputs);
      navigate("/gestionnaires");
      Swal.fire(
        "Gestionnaire modifié",
        "Le gestionnaire a été modifié avec succès",
        "success"
      );
    } catch (error) {
      Swal.fire(
        "Erreur",
        error.message || "Une erreur est survenue lors de la modification.",
        "error"
      );
    }
  };
  return (
    <div>
      <h2>Modifier gestionnaire</h2>
      <div className="row">
        <div className="col-sm-8">
          <input
            type="hidden"
            name="idGestionnaire"
            value={inputs.idGestionnaire}
          />
          <div className="row">
            <div className="col-md-6">
              <label>CNI Gestionnaire</label>
              <input
                className="form-control mb-2"
                type="text"
                name="cniGestionnaire"
                required
                value={inputs.cniGestionnaire || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label>Titre</label>
              <input
                className="form-control mb-2"
                type="text"
                name="title"
                required
                value={inputs.title || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label>Prénom</label>
              <input
                className="form-control mb-2"
                type="text"
                name="firstname"
                required
                value={inputs.firstname || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label>Nom</label>
              <input
                className="form-control mb-2"
                type="text"
                name="lastname"
                required
                value={inputs.lastname || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label>Email</label>
              <input
                className="form-control mb-2"
                type="email"
                name="email"
                required
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label>Nouveau mot de passe (optionnel)</label>
              <input
                className="form-control mb-2"
                type="password"
                name="passwordHash"
                placeholder="Laisser vide pour garder l'ancien"
                value={inputs.passwordHash || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            onClick={submitForm}
            type="button"
            className="btn btn-info mt-2"
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}
