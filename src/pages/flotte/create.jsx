import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { flotteService } from "../../services";

export default function Create() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    matriculeFlotte: "",
    typeFlotte: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = async () => {
    try {
      await flotteService.create(inputs);
      Swal.fire("Creation", "Flotte cree avec succès!", "success");
      navigate("/flottes");
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
      <h2>Nouvelle flotte</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center">
          <div className="col-md-6">
            <label>Type Flotte</label>
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
            <label>Matricule flotte</label>
            <input
              className="form-control mb-2"
              type="text"
              name="matriculeFlotte"
              required
              value={inputs.matriculeFlotte || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          onClick={submitForm}
          type="button"
          className="btn btn-info mt-2"
        >
          Creer
        </button>
      </div>
    </div>
  );
}
