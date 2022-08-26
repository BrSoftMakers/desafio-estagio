import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Container from "./components/layout/container/Container";
import Home from "./pages/Home";
import CadastroVeiculo from "./pages/CadastroVeiculo";
import UpdateVeiculo from "./pages/UpdateVeiculo";
import Veiculo from "./pages/Veiculo";

import {BrowserRouter, Routes, Route} from  'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
      
      <Header/>
        <Container>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/veiculo/:id' element={<Veiculo />}/>
              <Route path='/veiculo/cadastro' element={<CadastroVeiculo />}/>
              <Route path='/veiculo/update/:id' element={<UpdateVeiculo />}/>
            </Routes>
        </Container>
      <Footer />
      
    </BrowserRouter>
    
  );
}

export default App;
