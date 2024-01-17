import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {

  function modeDark() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "light" ? "dark" : "light"
  }

  return (
    <nav className="navbar bg-dark navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <FontAwesomeIcon icon={faReact} size='2x' style={{ color: '#00D1F7' }} className="ani1" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto my-0 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-auto d-flex align-items-center">
            <FontAwesomeIcon icon="fa-solid fa-sun" />
            <div className="form-check form-switch mx-2 d-flex justify-content-center"><input className="form-check-input p-2" type="checkbox" role="switch" id="flexSwitchCheckCheked" onClick={modeDark} /></div>
            <FontAwesomeIcon icon="fa-solid fa-moon" />
          </div>
        </div>
      </div>
    </nav>
  )
}
