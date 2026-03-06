function HookUseNavigate(){
    
    const irAlHome = () => {
        navigate("/");
    }
    
        const parte1 = () => {
        navigate("/");
    }

        const parte2 = () => {
        navigate("/usestate");
    }

        const parte3 = () => {
        navigate("/usenavegate");
    }
    
    return(
        <div>
            <h1>HookUseNavigate</h1>
            <button onClick={irAlHome}>Ir al Home</button>
        </div>
    )
}

export default HookUseNavigate;