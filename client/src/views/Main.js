import '../App.css';
import React, { useState  } from 'react'
import Dashboard from "../components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {

    const [authorList, setAuthorList] = useState([])
    // we initialize the state to what we want it to appear as (array)
    const [name, setName] = useState("")

    return (
        <div className="App">
            <Dashboard 
                authorList={authorList} 
                setAuthorList={setAuthorList}
                name={name}
                setName={setName}
            />
            <hr/>

        </div>
    )
}

export default Main;