import { useNavigate } from "react-router-dom";
function HookUseNavigate() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bienvenido a navigate</h1>
      <button onClick={() => navigate("/saludar")}>Ir al Saludar</button>
      <button onClick={() => navigate("/usestate")}>Ir State</button>
      <button onClick={() => navigate("/homehooks")}>Ir HomeHooks</button>
    </div>
  );
}

export default HookUseNavigate;
