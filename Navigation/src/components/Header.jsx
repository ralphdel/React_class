import { NavLink } from "react-router-dom";







const Header = () => {
  return (<>
  
    <div>
        <div></div>
        <div></div>
        <div>
            <NavLink> HOME</NavLink>
            <NavLink> ABOUT</NavLink>
            <NavLink> SETTINGS</NavLink>
            <NavLink> CONTACT</NavLink>
        </div>
        <div>
            <NavLink>
                <button> Login</button>
            </NavLink>
            <NavLink>
                <button> SignOut</button>
            </NavLink>
        </div>



    </div>
  
  </>);
};


export default Header