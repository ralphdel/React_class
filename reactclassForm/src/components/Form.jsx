import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
 const[entries, setEntries]= useState({})

  const Handleusername = (e) => setUsername(e.target.value);

  const Handleuseremail = (e) => setUseremail(e.target.value);

  const Handleform =(e) => {
  
    e.preventDefault();
   setEntries({
    ...entries,
    name: username,
    email: useremail
  })
  console.log(entries);

  }

  return (
    <>
      <h3> Form is ready </h3>
      <form
        onSubmit={Handleform}
      >
        <div>
          <label> Name </label>

          <input
            name="name"
            type="text"
            value={username}
            placeholder="type your name "
            onChange={Handleusername}
          />
        </div>
        <div>
          <label> Email </label>
          <input
            name="email"
            value={useremail}
            type="text"
            placeholder="enter your email"
            onChange={Handleuseremail}
          />
        </div>
        <button type="submit"> Submit </button>
      </form>

      <div>
        <p> Name: {entries.name}</p>
        <p> Email: {entries.email}</p>
      </div>
    </>
  );
};

export default Form;
