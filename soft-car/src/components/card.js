import React from 'react';
import './card.css';
import Logo from '../assets/img/img-soft-car.png';
import FormDialog from './dialog';

const Card = (props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickCard = () => {
    setOpen(true);
  }

  return (
    
      <div className='card--center__style'>
        <FormDialog
        open={open}
        setOpen={setOpen} 
        modelo={props.modelo} 
        marca={props.marca} 
        tipo={props.tipo}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
        />

        
        <div className='card--style' onClick={() => handleClickCard()}>
            <img  width={50} src={Logo} alt="Logo" />
            <p className='card--modelo'>Modelo: {props.modelo}</p>
            <p className='card--marca'>Marca: {props.marca}</p>
            <p className='card--tipo'>Tipo: {props.tipo}</p>
            <p>Status: DISPONIVEL</p>
        </div>
    </div>
  );
}

export default Card;