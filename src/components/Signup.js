import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name: "", email: "" , password: "", cpassword: ""});
const navigate = useNavigate();
const {name, email, password}= credentials;
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/auth/creatUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },      body: JSON.stringify({name, email, password })
      });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //save the auth toke and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Account created Successfully", "success");

    }else{
        props.showAlert("invalid Details", "danger");
    }
  }

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange} name="name" aria-describedby="emailHelp"/>
    </div> 
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={onChange} id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" onChange={onChange} id="cpassword" name="cpassword"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
