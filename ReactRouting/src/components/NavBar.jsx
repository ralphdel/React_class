import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          height: "50px",
          backgroundColor: "lightsteelblue",
        }}
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div
          style={{
            color: "black",
            display: "flex",
            gap: "20px",
            textDecoration: "none",
            alignItems:'center',
            marginRight:'8px'
          }}
        >
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/shop"> SHOP</Link>
          <Link to="/work">WORK</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
