import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
export default Menu;
