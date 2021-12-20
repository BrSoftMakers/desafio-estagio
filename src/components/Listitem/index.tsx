import * as C from './style';
import { Item } from '../../types/Item';
import { useState, KeyboardEvent } from 'react';
import handleRemoveItem from '../../App';
import ReactDOM from "react-dom";

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) =>{
    return(
        <C.Container>
            <label>{item.nome}</label>
            <label>{item.marca}</label>
            <label>{item.modelo}</label>
            <label>{item.tipo}</label>
            <label>{item.status}</label>
            <button onClick={() => handleRemoveItem()}> Deletar </button>
        </C.Container>
    );
}


