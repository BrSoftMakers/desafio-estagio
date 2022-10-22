import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from './components/layout/Container';
import Home from './components/pages/Home'
import NovoCarro from './components/pages/NovoCarro'
import Sobre from './components/pages/Sobre'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/novocarro">Novo Carro</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
      
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/novocarro" element={<NovoCarro />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
