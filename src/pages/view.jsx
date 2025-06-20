import {useEffect, useState} from "react";
import http from "../http";
import {useNavigate, useParams} from "react-router-dom";

export default function View(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        typeFlotte: '',
        matriculeFlotte: ''
    });
    const {id}=useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser =  ()=>{
        http.get('/Flottes/'+id).then((res)=>{
            setInputs({
                typeFlotte: res.data.typeFlotte,
                matriculeFlotte: res.data.matriculeFlotte,
            })
        })
    }
    return (
        <div>
            <h2>Vue flotte</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <h4>Type</h4>
                    <p>{inputs.typeFlotte}</p>
                    <h4>Matricule</h4>
                    <p>{inputs.matriculeFlotte}</p>
                    <button onClick={() => navigate('/')} type="button" className="btn btn-info mt-2">Retour</button>
                </div>
            </div>
        </div>
    )
}