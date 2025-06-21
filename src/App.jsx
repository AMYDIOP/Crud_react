import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";

import {
  CreateFlotte,
  EditFlotte,
  HomeFlotte,
  ViewFlotte,
} from "./pages/flotte";

import {
  CreateGestionnaire,
  EditGestionnaire,
  HomeGestionnaire,
  ViewGestionnaire,
} from "./pages/gestionnaire";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto container gap-3">
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
      <div className="container mt-5">
        <Routes>
          {/* Routes Flottes */}
          <Route path="/flottes" element={<HomeFlotte />} />
          <Route path="/flottes/create" element={<CreateFlotte />} />
          <Route path="/flottes/edit/:id" element={<EditFlotte />} />
          <Route path="/flottes/view/:id" element={<ViewFlotte />} />

          {/* Routes Gestionnaires */}
          <Route path="/gestionnaires" element={<HomeGestionnaire />} />
          <Route
            path="/gestionnaires/create"
            element={<CreateGestionnaire />}
          />
          <Route
            path="/gestionnaires/edit/:id"
            element={<EditGestionnaire />}
          />
          <Route
            path="/gestionnaires/view/:id"
            element={<ViewGestionnaire />}
          />

          {/* Route par défaut */}
          <Route path="/" element={<HomeFlotte />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
