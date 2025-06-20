import {useEffect, useState} from "react";
import http from "../http";
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";

export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        matriculeFlotte: '',
        typeFlotte: '',
        idFlotte: ''
    });
    const {id}=useParams();

    useEffect(() => {
        fetchFlotte();
    }, []);

    const fetchFlotte =  ()=>{
        http.get('/Flottes/'+id).then((res)=>{
            setInputs({
                matriculeFlotte: res.data.matriculeFlotte,
                typeFlotte: res.data.typeFlotte,
                idFlotte: res.data.idFlotte
            })
        })
    }
    const handleChange =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const submitForm = ()=>{
        http.put('/Flottes/'+id,inputs).then((res)=>{
            navigate('/');
            Swal.fire(
                'Flotte modifié',
                'La flotte a été modifié avec succès',
               'success'
            )
        })
    }
    return (
        <div>
            <h2>Modifier flotte</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="col-md-6">
                        <input type="hidden" name="idFlotte" value={inputs.idFlotte}/>
                        <label>Type</label>
                        <input className="form-control mb-2" type="text" name="typeFlotte" required
                               value={inputs.typeFlotte || ''}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Matricule</label>
                        <input className="form-control mb-2" type="text" name="matriculeFlotte" required
                               value={inputs.matriculeFlotte || ''}
                               onChange={handleChange}
                        />
                    </div>
                    <button onClick={submitForm} type="button" className="btn btn-info mt-2">Modifier</button>
                </div>
            </div>
        </div>
    )
}