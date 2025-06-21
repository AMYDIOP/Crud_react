import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { flotteService } from "../../services";

export default function View(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    typeFlotte: "",
    matriculeFlotte: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const data = await flotteService.getById(id);
      setInputs({
        typeFlotte: data.typeFlotte,
        matriculeFlotte: data.matriculeFlotte,
      });
    } catch (error) {
      console.error("Erreur lors de la récupération de la flotte:", error);
    }
  };

  return (
    <div>
      <h2>Vue flotte</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center">
          <h4>Type</h4>
          <p>{inputs.typeFlotte}</p>
          <h4>Matricule</h4>
          <p>{inputs.matriculeFlotte}</p>
          <button
            onClick={() => navigate("/flottes")}
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
