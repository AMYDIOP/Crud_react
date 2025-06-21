import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { flotteService } from "../../services";

export default function Edit() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    matriculeFlotte: "",
    typeFlotte: "",
    idFlotte: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetchFlotte();
  }, []);
  const fetchFlotte = async () => {
    try {
      const data = await flotteService.getById(id);
      setInputs({
        matriculeFlotte: data.matriculeFlotte,
        typeFlotte: data.typeFlotte,
        idFlotte: data.idFlotte,
      });
    } catch (error) {
      Swal.fire(
        "Erreur",
        "Impossible de récupérer les données de la flotte.",
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
      await flotteService.update(id, inputs);
      navigate("/flottes");
      Swal.fire(
        "Flotte modifié",
        "La flotte a été modifié avec succès",
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
      <h2>Modifier flotte</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center">
          <input type="hidden" name="idFlotte" value={inputs.idFlotte} />
          <div className="col-md-6">
            <label>Type</label>
            <input
              className="form-control mb-2"
              type="text"
              name="typeFlotte"
              required
              value={inputs.typeFlotte || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label>Matricule</label>
            <input
              className="form-control mb-2"
              type="text"
              name="matriculeFlotte"
              required
              value={inputs.matriculeFlotte || ""}
              onChange={handleChange}
            />
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
