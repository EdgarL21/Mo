import { Link } from "react-router-dom";
import { Nav } from "./NavBar.styles";

const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
