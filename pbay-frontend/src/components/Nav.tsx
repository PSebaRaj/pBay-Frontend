import React from "react";


const Nav = (props: { name: string, setName: (name: string) => void, loggedIn: boolean, setLoggedIn: (loggedIn: boolean) => void }) => {

    
    const logout = async () => {
        props.setName("");
        
        const response = await fetch("http://localhost:8000/api/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });

        props.setLoggedIn(false);
        props.setName("");
        //props.name = '';
    }

    let menu;
    if(props.name) {
        menu = (
            <ul className="navbar-nav mb-2 mb-md-0 align-right">
                <li className="nav-item">
                    <a className="nav-link" href="user">{props.name ? "Logged in as: " + props.name : "Not logged in"}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="login" onClick={logout}>Logout</a>
                </li>
            </ul>
            )
    }else{ // user is logged in
        menu = (
            <ul className="navbar-nav mb-2 mb-md-0 align-right">
            <li className="nav-item">
                <a className="nav-link" href="login">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="register">Register</a>
            </li>
            </ul>
        )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">PBAY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="link">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Favorites</a>
              </li>
            </ul>

            {menu}

          </div>
        </div>
      </nav>
    );
};

export default Nav;