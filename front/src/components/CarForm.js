import React, { useState, useContext } from 'react'
import { CarContext } from '../CarContext'
import { instance } from '../App'

const CarForm = () => {
    const {
        carListState,
        showFormState,
        modeloValueState,
        marcaValueState,
        tipoValueState,
        dispoValueState,
        carIdValueState,
        isEditingState,
    } = useContext(CarContext)
    const [carList, setCarList] = carListState
    const [showForm, setShowForm] = showFormState
    const [modeloValue, setModeloValue] = modeloValueState
    const [marcaValue, setMarcaValue] = marcaValueState
    const [tipoValue, setTipoValue] = tipoValueState
    const [disponibilidadeValue, setDisponibilidadeValue] = dispoValueState
    const [carIdValue, setCarIdValue] = carIdValueState
    const [isEditing, setIsEditing] = isEditingState
    const handleSubmit = (event) => {
        event.preventDefault()
        if (isEditing) {
            let editedCar = {
                modelo: modeloValue,
                marca: marcaValue,
                tipo: tipoValue,
                disponibilidade: disponibilidadeValue,
            }
            instance
                .post(`/update/${carIdValue}`, editedCar)
                .then(({ data }) => {
                    setCarList([
                        ...carList.filter((car) => car._id !== data._id),
                        data,
                    ])
                })
            setShowForm(false)
            setIsEditing(false)
        } else {
            let newCar = {
                modelo: modeloValue,
                marca: marcaValue,
                tipo: tipoValue,
                disponibilidade: disponibilidadeValue,
            }
            instance
                .post('/create', newCar)
                .then(({ data }) => setCarList([...carList, data]))
        }
        setMarcaValue('')
        setModeloValue('')
        setTipoValue('')
        setDisponibilidadeValue('')
        setCarIdValue('')
        setShowForm(false)
    }
    return showForm ? (
        <>
            <form className='container px-5 my-5' onSubmit={handleSubmit}>
                <div className='my-3'>
                    <label htmlFor='marca' className='form-label'>
                        Marca
                    </label>
                    <input
                        type='text'
                        id='marca'
                        name='marca'
                        className='form-control'
                        value={marcaValue}
                        onChange={(event) => {
                            setMarcaValue(event.target.value)
                        }}
                    />
                </div>
                <div className='my-3'>
                    <label htmlFor='modelo' className='form-label'>
                        Modelo
                    </label>
                    <input
                        type='text'
                        id='modelo'
                        name='modelo'
                        className='form-control'
                        value={modeloValue}
                        onChange={(event) => {
                            setModeloValue(event.target.value)
                        }}
                    />
                </div>
                <div className='my-3'>
                    <label htmlFor='tipo' className='form-label'>
                        Tipo
                    </label>
                    <select
                        className='form-select'
                        aria-label='Default select example'
                        id='tipo'
                        name='tipo'
                        onChange={(event) => {
                            setTipoValue(event.target.value)
                        }}
                        value={tipoValue}
                    >
                        <option selected>Escolha o tipo de carro</option>
                        <option defaultValue='Hatch'>Hatch</option>
                        <option defaultValue='Sedan'>Sedan</option>
                        <option defaultValue='SUV'>SUV</option>
                    </select>
                </div>
                <div className='mt-3 mb-1 form-check'>
                    <input
                        className='form-check-input'
                        type='radio'
                        id='disponibilidadeTrue'
                        onChange={() => setDisponibilidadeValue(true)}
                        checked={disponibilidadeValue == true}
                    />
                    <label
                        className='form-check-label'
                        htmlFor='disponibilidadeTrue'
                    >
                        Disponível
                    </label>
                </div>
                <div className='form-check mb-3'>
                    <input
                        className='form-check-input'
                        type='radio'
                        id='disponibilidadeFalse'
                        onChange={() => setDisponibilidadeValue(false)}
                        checked={disponibilidadeValue == false}
                    />
                    <label
                        className='form-check-label'
                        htmlFor='disponibilidadeFalse'
                    >
                        Indisponível
                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Enviar
                </button>
            </form>
        </>
    ) : (
        <button
            type='button'
            className='btn btn-primary text-center'
            onClick={() => setShowForm(true)}
        >
            Adicionar carro
        </button>
    )
}

export default CarForm

