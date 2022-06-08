import React, { useEffect } from 'react';
import Login from './pages/Login';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Register from './pages/Register';


function App() {
    const [name, setName] = React.useState(''); // name of user that is logged in, can pass to components and pages
    const [loggedIn, setLoggedIn] = React.useState(Boolean); // boolean to check if user is logged in

  console.log("App.tsx: name: " + name);

    useEffect(() => {
        (
            async () => {
                const response = await fetch("http://localhost:8000/api/user", {
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                });

                const reply = await response.json();
    
                setName(reply.name);
            }
        )();

    });


  return (
    <div className="App">

    
      <Nav name={name} setName={setName} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      
      <main className='form-signin'>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={() => <Home/>} />
  
            <Route path="/login" component={() => <Login setLoggedIn={setLoggedIn} setName={setName}/>} />
            <Route path="/register" component={() => <Register />}/>
            <Route exact path="/user" component={() => <User/>} />
          </div>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
