import React, { SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");

    const [redirect, setRedirect] = React.useState(false);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name, 
                email,
                password
            })
        });

        // const reply = await response.json();

        // console.log(reply);
        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <form onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 font-weight-normal'>Create a New Account</h1>
          <input id='inputName' className='form-control' placeholder='Name' required autoFocus onChange={e => setName(e.target.value)}/>
          <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required onChange={e => setEmail(e.target.value)}/>
          <input type='password' id='inputPassword' className='form-control' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Submit</button>
        </form>
    );
};

export default Register;