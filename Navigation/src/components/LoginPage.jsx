





const LoginPage = () => {
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="Name"> UserName </label>
          <input id="Name" type="text"  name="name"/>
        </div>
        <div>
          <label htmlFor="password"> Password </label>
          <input id="password" type="password" />
        </div>
        <div>
            <label htmlFor="Age"> Age </label>
            <input id="Age"    type="number"  name="Age"/>
        </div>
        <button> Submit </button>
      </form>
    </>
  );
};

export default LoginPage;
