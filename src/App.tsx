import { useState } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {ListItem} from './components/Listitem';
import { AddArea } from './components/AddArea';
import ReactDOM from "react-dom";



const App = () => {
const [list, setlist] = useState<Item[]>([
  {id: 1, nome: 'Argo', marca: 'Fiat', modelo: '2021', tipo: 'SUV', status: 'Alugado'},
  {id: 1, nome: 'Argo', marca: 'Fiat', modelo: '2021', tipo: 'SUV', status: 'Disponivel'},
]);

function handleRemoveItem(id: number){

  const newList = [...list];
  newList.splice(id, 1);
  setlist(newList);

}

const handleAddCar = (carid: string, carMarca: string, carModelo: string, carTipo: string, carStatus: string) => {
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    nome: carid,
    marca: carMarca,
    modelo: carModelo,
    tipo: carTipo,
    status: carStatus,
  });
  setlist(newList);
}

  return(
    <C.Container>
      <C.Area>
        <C.Header>Locadora de Carros</C.Header>
        
        {/* Area de adicionar novo carro */}
        <AddArea onEnter={handleAddCar}/>

        {/* Remover Carro */}
          
          {list.map((item, id) => (
            <ListItem key={id}  item={item} />
          ))}
       
        {/* Area de mostrar carros */}
        {list.map((item, id) => (
          <div key={id}> 
          </div>
        ))}
        

        </C.Area>
    </C.Container>
  );
};

export default App;