import React, { SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";

const User = () => {

    const [redirect, setRedirect] = React.useState(false);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/user", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });

 
        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 font-weight-normal'>DELETE CURRENT USER</h1>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>Delete User</button>
        </form>
    );
};

export default User;