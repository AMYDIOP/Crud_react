import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { gestionnaireService } from "../../services";
export default function Create() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    cniGestionnaire: "",
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    passwordHash: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitForm = async () => {
    try {
      await gestionnaireService.create(inputs);
      Swal.fire("Creation", "Gestionnaire créé avec succès!", "success");
      navigate("/gestionnaires");
    } catch (error) {
      Swal.fire(
        "Erreur",
        error.message || "Une erreur est survenue lors de la création.",
        "error"
      );
    }
  };
  return (
    <div>
      <h2>Nouveau gestionnaire</h2>
      <div className="row">
        <div className="col-sm-8">
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
              <label>Mot de passe</label>
              <input
                className="form-control mb-2"
                type="password"
                name="passwordHash"
                required
                value={inputs.passwordHash || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <button
            onClick={submitForm}
            type="button"
            className="btn btn-info mt-2"
          >
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}
