import { useState, useEffect } from "react";
import http from "../http";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Home() {
 const [flottes, setFlottes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllFlottes();
    }, []);

    const fetchAllFlottes = async () => {
        try {
            setLoading(true);
            const response = await http.get('/Flottes');
            setFlottes(response.data);
            setError(null);
        } catch (err) {
            setError('Une erreur est survenue lors de la récupération des données.');
            console.error('Erreur lors de la récupération des flottes:', err);
        } finally {
            setLoading(false);
        }
    }

    const deleteFlotte = async (id) => {
        try {
            await http.delete('/Flottes/' + id);
            fetchAllFlottes();
            Swal.fire(
                'Suppression',
                'Flotte supprimé avec succès!',
                'success'
            );
        } catch (err) {
            Swal.fire(
                'Erreur',
                'Une erreur est survenue lors de la suppression.',
                'error'
            );
            console.error('Erreur lors de la suppression de la flotte:', err);
        }
    }

    if (loading) {
        return <h2>Chargement...</h2>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <div>
            <h1>Home Page</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Matricule</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {flottes.map((flotte, index) => (
                    <tr key={flotte.idFlotte}>
                        <td>{index + 1}</td>
                        <td>{flotte.typeFlotte}</td>
                        <td>{flotte.matriculeFlotte}</td>
                        <td>
                            <Link className="btn btn-info" to={`/edit/${flotte.idFlotte}`}>Edit</Link>
                            <Link className="btn primary" to={`/view/${flotte.idFlotte}`}>View</Link>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deleteFlotte(flotte.idFlotte)}
                            >
                                Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}