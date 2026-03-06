
import { useNavigate } from "react-router-dom";

function HomeHooks(){
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate("/navigate")}>Atras</button>
            <h1>HomeHooks</h1>
        </div>
    );
}
export default HomeHooks;