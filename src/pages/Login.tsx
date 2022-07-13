import React, { SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";


const Login = (props: { setLoggedIn: (loggedIn: boolean) => void, setName: (name: string) => void }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [redirect, setRedirect] = React.useState(false);

  //var toRedirect = true;

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include', // to get JWT as cookie
      body: JSON.stringify({
          email,
          password
      })
  }).then(res => res.json()).then(json => props.setName(json.name)).then(() => props.setLoggedIn(true)).then(() => setRedirect(true));

    
    // //props.setLoggedIn(true);
    
    // const reply = await response.json();
    // props.setName(reply.name);
    
    // wait(500);
    // //toRedirect = false;
    // setRedirect(true);
    

  }


  if (redirect === true) {
    return <Redirect to="/" />;
  }

    return (
        <form onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 font-weight-normal'>Sign In</h1>
          <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autoFocus onChange={e => setEmail(e.target.value)}/>
          <input type='password' id='inputPassword' className='form-control' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        </form>
    );
};

export default Login;