import React from 'react';

import './form.css';

import {useHistory} from 'react-router-dom';

export default function Form () {

const [ name,setname] = React.useState("")
const [email,setemail] = React.useState("")
const [number,setnumber] = React.useState("")
const [age,setage] = React.useState("")
const [gender,setgender] = React.useState("")
const [date,setdate] = React.useState("")


const namechange = (e) => {
  setname(e.target.value)
}

const emailchange = (e) => {
  setemail(e.target.value)
}

const numberchange = (e) => {
  setnumber(e.target.value)
}

const agechange = (e) => {
  setage(e.target.value)
}

const genderchange = (e) => {
  setgender(e.target.value)
}

const datechange = (e) => {
  setdate(e.target.value)
}

const history = useHistory ()

const submithandle = (e) => {
  e.preventDefault();
  history.push(`/confirm?name=${name}&email=${email}&number=${number}&age=${age}&gender=${gender}&date=${date}`);
}
        return (
          <div class="container">
         <form onSubmit={submithandle}>
            <div class="alpha">
                <p> 
                    <span className="instruction">Name:</span>
                    <input type="text" value={name} onChange={namechange} required placeholder="Enter Your Full Name"/>
                  </p>          
                <p>
                    <span className="instruction">Email:</span> 
                    <input type="email" value={email}onChange={emailchange} required placeholder="Enter Your Email Address"/>
                  </p>
                <p>
                    <span className="instruction">Mobile no.:</span>
                    <input type="number" value={number} onChange={numberchange} required placeholder="Enter Your Mobile no."/>
                </p>
                <p>
                    <span className="instruction">Age:</span>
                    <input type="number" value={age} onChange={agechange} required placeholder="Enter Your Age" />
                </p>
                <select className="gender">Gender:
                    <option value={gender} onChange={genderchange}> Male </option> 
                    <option value={gender} onChange={genderchange}> Female</option>  
                    <option value={gender} onChange={genderchange}> Prefer not to Say</option>
                </select>
                <p className="date-class"><span className="instruction">Date of Birth:</span> <input type="date" value={date} onChange={datechange} required classname="input-dob"/></p>
                <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        )
    }