import React, { useState, useEffect } from 'react';
import './conteudo.css';
import Axios from "axios";
import axios from 'axios';
import Card from './card';


const Conteudo = () => {

  const[values, setValues] = useState();
  const [listCarros, setListCarros] = useState();
  console.log(listCarros);

  const changeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const clickButton = () =>{
    Axios.post("http://localhost:3001/register", {
      modelo: values.modelo,
      marca: values.marca,
      tipo: values.tipo,
    }).then(() =>{
      setListCarros([
        ...listCarros, 
        {
          modelo: values.modelo,
          marca: values.marca,
          tipo: values.tipo,
        }
      ]);
    });
  }

  useEffect(() =>{
    Axios.get("http://localhost:3001/getCards").then((response)=>{
      setListCarros(response.data);
    });
  }, []);

  return (
    <section className='backG'>
      <h1> - CADASTRE SEU CARRO AQUI - </h1>
      <div className='card-crud'>
        <div className='card-crud-implement'>
          <div className='input-card'>
            <p>Marca:</p>
            <input type="text" name="marca" placeholder='Digite a marca do carro' className='register--input' onChange={changeValues}/>
          </div>
          
          <div className='input-card'>
            <p>Modelo:</p>
            <input type="text" name="modelo" placeholder='Digite o modelo do carro' className='register--input' onChange={changeValues}/>
          </div>

          <div className='input-card'>
            <p>Tipo:</p>
            <input type="text" name="tipo" placeholder='Digite o tipo do carro' className='register--input' onChange={changeValues}/>
          </div>
          
          <div className='button-card'>
          <button className='register--button' onClick={() => clickButton()}>Cadastrar</button>
          </div>

          {typeof listCarros !== "undefined" && listCarros.map((value) => {
            return <Card key={value.id}
             listCard={listCarros}
             setLisCard={setListCarros}
             id={value.idcarros} 
             modelo={value.modelo}
             marca={value.marca} tipo={value.tipo}/>;
          })};

        </div>
      </div>
    </section>
  )
}

export default Conteudo;