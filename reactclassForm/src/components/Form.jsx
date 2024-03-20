import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");

  const Handleusername = (e) => setUsername(e.target.value);

  const Handleuseremail = (e) => setUseremail(e.target.value);

  const Handleform =(e) => {
    e.preventDefault();
    console.log(`Username:${username}  Useremail:${useremail}`);
    setUsername('');
    setUseremail('')

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
        <button> Submit </button>
      </form>

      <div>
        <p> Name: {username}</p>
        <p> Email: {useremail}</p>
      </div>
    </>
  );
};

export default Form;
