import "./NavBar.css";
import CardWidget from "./CardWidget";

const Navbar =() => {
    return (
    <div className="navbar-container">
        <h1>TIENDA DE CASCOS</h1>
        <button className="buttons-navbar">Cascos motos</button>
        <button className="buttons-navbar">Cascos Ciclas</button>
        <button className="buttons-navbar">Cascos Patinetas</button>
        <CardWidget/>
        </div>
    );
}

export default Navbar;