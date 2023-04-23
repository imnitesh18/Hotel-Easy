import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    alert("Logged Out Successfully");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotel Easy</span>
        <div className="navItems">
          {/* <button className="navButton">Register</button> */}
          <button onClick={handleLogout} className="navButton">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
