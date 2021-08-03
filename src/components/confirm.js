import React from 'react';
import { useLocation } from "react-router-dom";
import './confirm.css';

function Confirm() {

    const {search} = useLocation()
    
    const queries = new URLSearchParams(search)
    
    const name = queries.get('name');
    const email = queries.get('email');
    const number = queries.get('number');
    const age = queries.get('age');
    const gender = queries.get('gender');
    const date = queries.get('date');

    return(
        <div className="box" style={{border:"1px solid black", paddingLeft:"10px", paddingRight:"10px", paddingBottom:"10px"}}>
            <p className="heading">Please confirm the data you've submitted</p>
            <p>Name: <span className="inputs">{name}</span></p>
            <p>Email Address: <span className="inputs">{email}</span></p>
            <p>Mobile no.: <span className="inputs">{number}</span></p>
            <p>Age: <span className="inputs">{age}</span></p>
            <p>Gender: <span className="inputs">{gender}</span></p>
            <p>Date: <span className="inputs">{date}</span></p>
            <button className="button">Confirm</button>
            </div>
    )
}

export default Confirm;