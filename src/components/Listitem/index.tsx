import * as C from './style';
import { Item } from '../../types/Item';
import { useState, KeyboardEvent} from 'react';
import handleRemoveItem from '../../App';
import ReactDOM from "react-dom";
import list from '../../App';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) =>{
    return(
        <C.Container>
            <label>Nome: {item.nome}</label>
            <label>Marca: {item.marca}</label>
            <label>Modelo: {item.modelo}</label>
            <label>Tipo: {item.tipo}</label>
            <label>Status: {item.status}</label>
        </C.Container>
    );
}


