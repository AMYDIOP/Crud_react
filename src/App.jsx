import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts";

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
    <Routes>
      <Route component={Layout}>
        {/* Routes Flottes */}
        <Route path="/flottes" element={<HomeFlotte />} />
        <Route path="/flottes/create" element={<CreateFlotte />} />
        <Route path="/flottes/edit/:id" element={<EditFlotte />} />
        <Route path="/flottes/view/:id" element={<ViewFlotte />} />

        {/* Routes Gestionnaires */}
        <Route path="/gestionnaires" element={<HomeGestionnaire />} />
        <Route path="/gestionnaires/create" element={<CreateGestionnaire />} />
        <Route path="/gestionnaires/edit/:id" element={<EditGestionnaire />} />
        <Route path="/gestionnaires/view/:id" element={<ViewGestionnaire />} />

        {/* Route par défaut */}
        <Route path="/" element={<HomeFlotte />} />
      </Route>
    </Routes>
  );
}

export default App;
