import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Editar from "../pages/editar";

export function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editar" element={<Editar />} />
        </Routes>
      </Router>
    </>
  );
}
