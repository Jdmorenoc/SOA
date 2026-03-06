import { useNavigate } from "react-router-dom";
function Saludar() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hola, mundo!</h1>
      <button onClick={() => navigate("/")}>Ir al Home</button>
      <button onClick={() => navigate("/saludar")}>Ir Saludar</button>
      <button onClick={() => navigate("/usestate")}>Ir State</button>
      <button onClick={() => navigate("/usenavigate")}>Ir Navigate</button>

    </div>
  );
}
export default Saludar;
