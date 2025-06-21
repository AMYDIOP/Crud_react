import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { gestionnaireService } from "../../services";
export default function Home() {
  const [gestionnaires, setGestionnaires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllGestionnaires();
  }, []);
  const fetchAllGestionnaires = async () => {
    try {
      setLoading(true);
      const data = await gestionnaireService.getAll();
      setGestionnaires(data);
      setError(null);
    } catch (err) {
      setError("Une erreur est survenue lors de la récupération des données.");
      console.error("Erreur lors de la récupération des gestionnaires:", err);
    } finally {
      setLoading(false);
    }
  };
  console.log(gestionnaires);
  const deleteGestionnaire = async (id) => {
    try {
      await gestionnaireService.delete(id);
      fetchAllGestionnaires();
      Swal.fire("Suppression", "Gestionnaire supprimé avec succès!", "success");
    } catch (err) {
      Swal.fire(
        "Erreur",
        "Une erreur est survenue lors de la suppression.",
        "error"
      );
      console.error("Erreur lors de la suppression du gestionnaire:", err);
    }
  };

  if (loading) {
    return <h2>Chargement...</h2>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h1>Gestionnaires</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>CNI</th>
            <th>Titre</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gestionnaires.map((gestionnaire, index) => (
            <tr key={gestionnaire.id}>
              <td>{index + 1}</td>
              <td>{gestionnaire.cniGestionnaire}</td>
              <td>{gestionnaire.title}</td>
              <td>{gestionnaire.firstName}</td>
              <td>{gestionnaire.lastName}</td>
              <td>{gestionnaire.email}</td>
              <td>{gestionnaire.role}</td>
              <td>
                <Link
                  className="btn btn-info me-2"
                  to={`/gestionnaires/edit/${gestionnaire.id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-primary me-2"
                  to={`/gestionnaires/view/${gestionnaire.id}`}
                >
                  View
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteGestionnaire(gestionnaire.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
