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
    <>
      <section className="container-fluid bg-body-tertiary d-flex justify-content-between">
        <a className="btn m-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <FontAwesomeIcon icon="fa-solid fa-bars" size="2x" />
        </a>
        <div className="row">
          <div className="col-auto d-flex align-items-center">
            <FontAwesomeIcon icon="fa-solid fa-moon" /><div className="form-check form-switch mx-2 d-flex justify-content-center"><input className="form-check-input p-2" type="checkbox" role="switch" id="flexSwitchCheckCheked" onClick={modeDark} /></div><FontAwesomeIcon icon="fa-solid fa-sun" />
          </div>
        </div>
      </section>
      <section className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header" data-bs-dismiss="offcanvas">
          <Link className="navbar-brand" to={"/"}>
            <FontAwesomeIcon icon={faReact} size='3x' style={{ color: '#00D1F7' }} className="ani1" />
          </Link>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto my-0 mb-lg-0">
            <li className="nav-item mb-2" data-bs-dismiss="offcanvas">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <div className="row d-flex align-items-center">
                  <div className="col-2">
                    <FontAwesomeIcon icon="fa-solid fa-house" size="2x" />
                  </div>
                  <div className="col">
                    <h4 className="mb-0">Inicio</h4>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item mb-2" data-bs-dismiss="offcanvas">
              <Link className="nav-link" to="/servicios">
                <div className="row d-flex align-items-center">
                  <div className="col-2">
                    <FontAwesomeIcon icon="fa-solid fa-industry" size="2x" />
                  </div>
                  <div className="col">
                    <h4 className="mb-0">Servicios</h4>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item mb-2" data-bs-dismiss="offcanvas">
              <Link className="nav-link" to={"/contacto"}>
                <div className="row d-flex align-items-center">
                  <div className="col-2">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" size="2x" />
                  </div>
                  <div className="col">
                    <h4 className="mb-0">Contacto</h4>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-center">Redes sociales</p>
          </div>
        </div>
      </section>
    </>
  )
}
