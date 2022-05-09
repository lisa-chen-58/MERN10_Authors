import React, { useState  } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Form = (props) => {
    const{id} = props;
    const {authorList, setAuthorList} = useState("");
    const [name, setName] = useState("");
    // const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({});

const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/authors', {
        name
    })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            // setAuthorList([...authorList, res.data])
                // this is only really needed if the form + display are on the same page.
            setName("")
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors)
        })
}


return (
    // <h1>Form</h1>
    <form onSubmit={onSubmitHandler}>
        <div>
            <div>
                <br/>
                <h1>Favorite Authors!</h1>
                <h4>Add a New Author</h4>
                <Link className='App-link lav-button' to='/'>Home</Link>
                <hr/>
            </div>
            <label>Name: </label>
            <input 
                type="text"
                onChange = {(e)=>{
                    setName(e.target.value)
                }}/>
            { 
                errors.name ? 
                <p>{errors.name.message}</p>:
                null
            }
        </div>
        <input type="submit" className="khaki-button"/>
    </form>
    )
};
export default Form;