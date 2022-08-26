"use strict"

const abrirTela = () => document.getElementById("tela").classList.add("active")
const fecharTela = () => {
    document.getElementById("tela").classList.remove("active")
}

const getLocalStorage = () => JSON.parse(localStorage.getItem("db-veiculo")) ?? [] // Pega os dados do localStorage, transforma em JSON e armazena no local veiculo
const setLocalStorage = (dbVeiculo) => localStorage.setItem("db-veiculo", JSON.stringify(dbVeiculo)) // Manda novamente os dados para o banco

// DELETE
const deleteVeiculo = (index) => {
    const dbVeiculo = readVeiculo()
    dbVeiculo.splice(index, 1)
    setLocalStorage(dbVeiculo)
}

// UPDATE
const updateVeiculo = (index, veiculo) => {
    const dbVeiculo = readVeiculo()
    dbVeiculo[index] = veiculo
    setLocalStorage(dbVeiculo)
}