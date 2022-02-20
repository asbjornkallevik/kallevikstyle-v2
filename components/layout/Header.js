import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolderOpen,
  faHome,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="page-header" role="banner">
      {/* <!-- Main navigation --> */}
      <nav className="navbar navbar-expand-md shadow" role="navigation">
        {/* <!-- Toggle navigation --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#page-navigation"
          aria-controls="page-navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>

        <div className="collapse navbar-collapse" id="page-navigation">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="navbar__item nav-link" href="#home" role="link">
                <FontAwesomeIcon icon={faHome} />
                <span className="sr-only visually-hidden">Hjem</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar__item nav-link" href="#about" role="link">
                <FontAwesomeIcon icon={faUserAlt} />
                <span className="sr-only visually-hidden">Om meg</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="navbar__item nav-link"
                href="#selected-projects"
                role="link"
              >
                <FontAwesomeIcon icon={faFolderOpen} />
                <span className="sr-only visually-hidden">
                  Utvalgte prosjekter
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar__item nav-link" href="#contact" role="link">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="sr-only visually-hidden">Kontakt</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
