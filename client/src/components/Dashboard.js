import React, {useEffect, useState} from 'react';
import { Link, navigate  } from '@reach/router';
import axios from 'axios';

const Dashboard = (props) => {
    const {authorList, setAuthorList} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err)=>console.log(err))
    },[])

    const deleteAction = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
        .then((res) => {
            console.log(res.data);
            setAuthorList(authorList.filter((author,index) => author._id !== deleteId
            ))
        })
        .catch((err) => console.log(err));
    }

    // const removeBook = { e, index) => {
    // e.preventDefault();
    // const newBooks = [...books];
    // newBooks.splice(index, 1);
    // setBooks(newBooks);
// }}


    return (
        <div className="App-header">
            
            <h1>Favorite Authors</h1>
            <Link className='khaki-button App-link' to='/new'>Create an Author</Link>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                    {
                    authorList.map((author,index) => (
                        <tbody key={author._id}>
                            <tr>
                                <td> {author.name} </td>
                                <td>
                                    <button className="khaki-button" onClick={()=> navigate(`/authors/${author._id}`)}>Edit</button>
                                    <button className="lav-button" onClick={()=> deleteAction(author._id)}>
                                        Delete Product
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        ))
                    }
            </table>
        </div>
    );
}

export default Dashboard;
