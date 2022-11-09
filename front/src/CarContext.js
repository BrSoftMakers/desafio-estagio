import { createContext, useState } from 'react'

export const CarContext = createContext()

export const CarContextProvider = ({ children, setCarList }) => {
    const carListState = useState([])
    const showFormState = useState(false)
    const modeloValueState = useState('')
    const marcaValueState = useState('')
    const tipoValueState = useState('')
    const dispoValueState = useState(false)
    const carIdValueState = useState('')
    const isEditingState = useState(false)
    return (
        <CarContext.Provider
            value={{
                carListState,
                showFormState,
                modeloValueState,
                marcaValueState,
                tipoValueState,
                dispoValueState,
                carIdValueState,
                isEditingState,
            }}
        >
            {children}
        </CarContext.Provider>
    )
}

