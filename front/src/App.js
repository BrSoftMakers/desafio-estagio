import React from 'react'
import CarForm from './components/CarForm'
import CarList from './components/carList'
import { CarContextProvider } from './CarContext'
import axios from 'axios'

const App = () => {
    return (
        <div className='container-fluid d-flex flex-column'>
            <h1 className='display-1 text-center my-3'>Lista de carros</h1>
            <CarContextProvider>
                <CarList />
                <CarForm />
            </CarContextProvider>
        </div>
    )
}

export const instance = axios.create({
    baseURL: 'http://localhost:8080/car',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default App

