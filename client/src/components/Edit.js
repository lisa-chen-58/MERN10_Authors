import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Edit = (props) => {
    const{id} = props;
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err)
                navigate("/error")
            })
    },[id]) 
            //id is not needed, but removes a warning

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
        }
    

    return (
        <div>
            <div>
                <h3>Update the following Fields</h3>
            </div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                    <label>Author: </label><br/>
                    <input value={name} type="text" onChange = {(e)=>{
                        setName(e.target.value)
                        }}/>
                    { 
                        errors.name ? 
                        <p>{errors.name.message}</p>:
                        null
                    }
                <button className="khaki-button" type="submit">Submit</button>
            </form>
            <Link className="lav-button" to={"/"}>Home</Link>
        </div>
    );
};

export default Edit;