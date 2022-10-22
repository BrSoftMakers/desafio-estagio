import './App.css';
import Header from './components/Header';
import LogoInicial from './components/LogoInicial';
import Conteudo from './components/Conteudo';
import Card from './components/card';


function App() {
  return (
    <div>
      <section className='backgroundTeste'>
        <Header />
        <LogoInicial />
      </section>
  
      <Conteudo />
    </div>
  );
}

export default App;
