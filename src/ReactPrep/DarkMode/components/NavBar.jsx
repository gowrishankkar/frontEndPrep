import { useTheme } from "../theme-context";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Blog">Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
