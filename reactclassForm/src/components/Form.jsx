import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");

 // const Handleusername


  //const Handleuseremail = () => (e) => setUseremail(e.target.value);

  return (
    <>
      <h3> Form is ready </h3>
      <form action="">
        <div>
          <label > Name </label>

          <input
            name="name"
            type="text"
            placeholder="type your name "
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div>
          <label > Email </label>
          <input
            type="text"
            placeholder="enter your email"
            onChange={(e)=> setUseremail(e.target.value)}
          />
        </div>
        <button  onSubmit={(e)=>{
            e.preventDefault();

           return console.log(`Name:${username}, Email:${useremail}`);
            }
           }> Submit </button>
      </form>

      <div>
        <p> Name: {username}</p>
        <p> Email: {useremail}</p>
      </div>
    </>
  );
};

export default Form;
