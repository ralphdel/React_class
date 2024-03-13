import { Component, useState } from "react";

const Alt = () => {
  const [isLogged, setisLogged] = useState(false);
  const loginHandler=()=> setisLogged(true)
  const logoutHandler=()=> setisLogged(false)


  return (
    <>
      <div>
        {isLogged ? (
          <>
            <h1>Welcome Back Ralph</h1>
            <button onClick={logoutHandler}>Log Out</button>
          </>
        ) : (
            <>
            <p style={{fontStyle:"italic", color:"red"}}>Please log in</p>
          <button onClick={loginHandler}> {isLogged?"loading...":"Log In"}</button>
          </>
        )}
      </div>
    </>
  );
};

export default Alt;

///conditional formating, this helps to check if a particular thing is log in or not
