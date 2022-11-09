import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { CarContext } from '../CarContext'
import { instance } from '../App'

const CarList = () => {
    const {
        carListState,
        modeloValueState,
        showFormState,
        marcaValueState,
        tipoValueState,
        dispoValueState,
        carIdValueState,
        isEditingState,
    } = useContext(CarContext)
    const [carList, setCarList] = carListState
    const [_, setShowForm] = showFormState
    const [__, setMarcaValue] = marcaValueState
    const [___, setModeloValue] = modeloValueState
    const [____, setTipoValue] = tipoValueState
    const [_____, setDisponibilidadeValue] = dispoValueState
    const [______, setCarIdValue] = carIdValueState
    const [_______, setIsEditing] = isEditingState
    const handleDelete = ({ target }) => {
        let carID = target.closest('tr').getAttribute('data-car-id')
        instance.post(`/delete/${carID}`).then(({ data }) => {
            setCarList(carList.filter((car) => car._id !== data._id))
        })
    }
    const handleEdit = ({ target }) => {
        let carDataElement = target.closest('tr')
        let carMake = carDataElement.getAttribute('data-car-make')
        let carModel = carDataElement.getAttribute('data-car-model')
        let carType = carDataElement.getAttribute('data-car-type')
        let carEnabled = JSON.parse(
            carDataElement.getAttribute('data-car-enabled'),
        )
        let carId = carDataElement.getAttribute('data-car-id')
        setShowForm(true)
        setMarcaValue(carMake)
        setModeloValue(carModel)
        setTipoValue(carType)
        setDisponibilidadeValue(carEnabled)
        setCarIdValue(carId)
        setIsEditing(true)
    }
    useEffect(() => {
        instance.get('/').then(({ data }) => {
            setCarList(data)
        })
    }, [])
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Marca</th>
                    <th scope='col'>Modelo</th>
                    <th scope='col'>Tipo</th>
                    <th scope='col'>Editar</th>
                    <th scope='col'>Remover</th>
                </tr>
            </thead>
            <tbody>
                {carList.map((carro) => {
                    return (
                        <tr
                            className={
                                carro.disponibilidade ? '' : 'table-secondary'
                            }
                            key={carro._id}
                            data-car-id={carro._id}
                            data-car-model={carro.modelo}
                            data-car-make={carro.marca}
                            data-car-type={carro.tipo}
                            data-car-enabled={carro.disponibilidade}
                        >
                            <th scope='row'>{carro.marca}</th>
                            <td>{carro.modelo}</td>
                            <td>{carro.tipo}</td>
                            <td>
                                <button
                                    type='button'
                                    className='btn'
                                    onClick={handleEdit}
                                >
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                            </td>
                            <td>
                                <button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={handleDelete}
                                >
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CarList

