import Menu from "../../layouts/menu";
import Footer from "../../layouts/footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const nav = () => {
    alert("Vous êtes connecté");
    navigate("/");
  };

  return (
    <div>
      <Menu />
      <h1>Login</h1>
      <button onClick={nav}>Cliquez moi !</button>
      <Footer />
    </div>
  );
}
export default Login;
