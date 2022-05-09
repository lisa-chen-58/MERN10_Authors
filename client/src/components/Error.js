import React from "react";
import {Link} from '@reach/router';

const Error = (props)=>{

    return(
        <div>
            <p> This is not a valid author. Please try creating a new one!</p>
            <Link className="App-link red-button" to ={"/new"}>Create an Author</Link>
        </div>
    )
}

export default Error;