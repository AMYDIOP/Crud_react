import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gestionnaireService } from "../../services";

export default function View() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    cniGestionnaire: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
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
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
      });
    } catch (error) {
      console.error("Erreur lors de la récupération du gestionnaire:", error);
    }
  };
  return (
    <div>
      <h2>Vue gestionnaire</h2>
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <div className="col-md-6">
              <h4>CNI Gestionnaire</h4>
              <p>{inputs.cniGestionnaire}</p>
            </div>
            <div className="col-md-6">
              <h4>Titre</h4>
              <p>{inputs.title}</p>
            </div>
            <div className="col-md-6">
              <h4>Prénom</h4>
              <p>{inputs.firstName}</p>
            </div>
            <div className="col-md-6">
              <h4>Nom</h4>
              <p>{inputs.lastName}</p>
            </div>
            <div className="col-md-6">
              <h4>Email</h4>
              <p>{inputs.email}</p>
            </div>
            <div className="col-md-6">
              <h4>Rôle</h4>
              <p>{inputs.role}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/gestionnaires")}
            type="button"
            className="btn btn-info mt-2"
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}
