import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {
 
    const [editValues, setEditValues] = useState({
    id: props.id,
    modelo: props.modelo,
    marca: props.marca,
    tipo: props.tipo,
});

const handleEditCarro = () => {
  Axios.put("http://localhost:3001/edit", {
    id: editValues.id,
    modelo: editValues.modelo,
    marca: editValues.marca,
    tipo: editValues.tipo,
})
  handleClose();
};
  
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };
  
  const handleChangeValues = value => {
    setEditValues(prevValues => ({
        ...prevValues,
        [value.target.id]: value.target.value,
    }));
  };


  const handleDeleteCarros = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="modelo"
            label="modelo"
            defaultValue={props.modelo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="marca"
            label="Marca"
            defaultValue={props.marca}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="tipo"
            label="tipo"
            defaultValue={props.tipo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteCarros()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditCarro()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}