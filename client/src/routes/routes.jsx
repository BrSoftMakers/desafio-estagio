import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element="" />
          <Route path="/carro" element="" />
        </Routes>
      </Router>
    </>
  );
}
