import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/flottes"} className="nav-link">
                Flottes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/gestionnaires"} className="nav-link">
                Gestionnaires
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/flottes/create"} className="nav-link">
                Nouvelle Flotte
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/gestionnaires/create"} className="nav-link">
                Nouveau Gestionnaire
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
