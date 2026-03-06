import { useNavigate } from "react-router-dom";
function Saludar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/navigate")}>Atras</button>
      <h1>Hola Mundo!</h1>

    </div>
  );
}
export default Saludar;
