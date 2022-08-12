import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div>
      
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/services">Services</Link>
      </div>
  

  );
}

export default Navbar;