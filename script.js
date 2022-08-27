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
        atualizarTabela()
        fecharTela()
    }
}

const criarLinha = (veiculo, index) => {
    const novaLinha = document.createElement("tr")
    novaLinha.innerHTML = `
        <td>${veiculo.modelo}</td>
        <td>${veiculo.marca}</td>
        <td>${veiculo.tipo}</td>
        <td>${veiculo.situaçao}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `
    document.querySelector("#tabelaCarros>tbody").appendChild(novaLinha)
}

const limparTabela = () => {
    const linhas = document.querySelectorAll("tabelaCarros>tbody tr")
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}

const atualizarTabela = () => {
    const dbVeiculo = readVeiculo()
    limparTabela()
    dbVeiculo.forEach(criarLinha)
}

const editarExcluir = (event) => {
    if(event.target.type == "button") {
        const [action, index] = event.target.id.split("-")

        if(action == "edit") {
            editVeiculo(index)
        }else {
            console.log("deletando veiculo");
        }
    }
}

atualizarTabela()

//Eventos
document.getElementById("listarCarros").addEventListener("click", abrirTela)
document.getElementById("telaClose").addEventListener("click", fecharTela)  
document.getElementById("salvar").addEventListener("click", saveVeiculo)