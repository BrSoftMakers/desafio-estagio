import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import EditLocadora from './pages/EditLocadora'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />

      <main className="container content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/editlocadora" element={<EditLocadora />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
