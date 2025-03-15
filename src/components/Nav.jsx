import { Link } from "react-router-dom";
import "../styles/style.scss";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Hjem</Link>
      <Link to="/resources">Ressurser</Link>
    </nav>
  );
};

export default Nav;
