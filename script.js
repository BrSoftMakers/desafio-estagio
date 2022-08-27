"use strict"

const abrirTela = () => document.getElementById("tela").classList.add("active")
const fecharTela = () => {
    limparCampo()
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

// READ
const readVeiculo = () => getLocalStorage()

// CREATE
const createVeiculo = (veiculo) => {
    const dbVeiculo = getLocalStorage()
    dbVeiculo.push(veiculo)
    setLocalStorage(dbVeiculo)
}

// Função que verifica se todos os campos são válidos 
const validarCampo = () => {
    return document.getElementById("form").reportValidity()
}

//Interação
const limparCampo = () => {
    const campos = document.querySelectorAll(".tela-campo")
    campos.forEach(campo => campo.value = "")
}

const saveVeiculo = () => {
    if(validarCampo()) {
        const veiculo = {
            modelo: document.getElementById("modelo").value, 
            marca: document.getElementById("marca").value, 
            tipo: document.getElementById("tipo").value, 
            situaçao: document.getElementById("situaçao").value 
        }
        createVeiculo(veiculo)
        fecharTela()
    }
}

const criarLinha = (veiculo) => {
    const novaLinha = document.createElement("tr")
    novaLinha.innerHTML = `
        <td>${veiculo.modelo}</td>
        <td>${veiculo.marca}</td>
        <td>${veiculo.tipo}</td>
        <td>${veiculo.situaçao}</td>
        <td>
            <button type="button" class="button green">editar</button>
            <button type="button" class="button red">excluir</button>
        </td>
    `
    document.querySelector("#tabelaCarros>tbody").appendChild(novaLinha)
}

const atualizarTabela = () => {
    const dbVeiculo = readVeiculo()
    dbVeiculo.forEach(criarLinha)
}

atualizarTabela()

//Eventos
document.getElementById("listarCarros").addEventListener("click", abrirTela)
document.getElementById("telaClose").addEventListener("click", fecharTela)  
document.getElementById("salvar").addEventListener("click", saveVeiculo)