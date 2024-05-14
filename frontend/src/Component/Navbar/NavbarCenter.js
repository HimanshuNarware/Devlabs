import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark, faCode, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <span className="navbar-center">
      <ul className="mb-2 navbar-content">
        <li className="nav-item">
          <FontAwesomeIcon icon={faHome} /> {/* Home Icon */}
          <NavbarItem description="Home" to="/" />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faBookmark} /> {/* Bookmark Icon */}
          <NavbarItem description="BookMark" to="/bookmark" />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faCode} /> {/* Open Source Icon */}
          <NavbarItem description="Open Source" to="/open-source"/>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faInfoCircle} /> {/* About Us Icon */}
          <NavbarItem description="About Us" to="/about" />
        </li>
      </ul>
    </span>
  );
};
