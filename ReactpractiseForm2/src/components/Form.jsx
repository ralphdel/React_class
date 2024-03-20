import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const [entries, setEntries] = useState([]);

  const Handleinputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const Handleformsubmit = (e) => {
    e.preventDefault();

    setEntries([
      ...entries,
      {
        Username: inputs.name,
        Useremail: inputs.email,
        Userpassword: inputs.password,
        id: '2024'+entries.length+'wrtygf'
      },
    ]);
    setInputs({ name: "", email: "", password: "" });


    console.log(entries);
  };

  return (
    <>
      <h2>Form is ready</h2>
      <form onSubmit={Handleformsubmit}>
        <div>
          <label htmlFor=""> Name </label>
          <input
            type="text"
            name="name"
            placeholder="type name here "
            value={inputs.name}
            onChange={Handleinputs}
          />
        </div>
        <div>
          <label htmlFor=""> Email </label>
          <input
            type="email"
            name="email"
            placeholder="enter your email address"
            value={inputs.email}
            onChange={Handleinputs}
          />
        </div>
        <div>
          <label htmlFor="">Password </label>
          <input
            type="password"
            name="password"
            placeholder="type password here"
            value={inputs.password}
            onChange={Handleinputs}
          />
        </div>

        <button   > SUBMIT</button>
      </form>
      <div>
        <p>Name:{inputs.name}</p>
        <p>Email: {inputs.email}</p>
        <p>Password: {inputs.password}</p>
      </div>
    </>
  );
};

export default Form;
