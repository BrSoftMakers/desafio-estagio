#calling libraries and files
from types import MethodType
from flask import Flask, render_template, request, redirect
from classes.Carro import Carro

#webApp gets flask library to initialize
webApp = Flask(__name__)

#predefined cars
carro1 = Carro("Audi A4", "Audi", "SUV", "Alugado")
carro2 = Carro("Porsche AG", "Porsche", "Conversível", "Disponível")
carro3 = Carro("Toyota Etion", "Toyota", "Sedan", "Alugado")

#account list
carros = [carro1, carro2, carro3]

#main route
@webApp.route('/')
def index():
    return render_template('index.html', titulo="Lista de Carros", automoveis = carros)

#registration route
@webApp.route('/carro/novo')
def cadastro():
    return render_template('cadastrar.html', titulo="Cadastrar")

#account registration route
@webApp.route('/carro/cadastrar', methods=['POST', ])
def cadastrar():
    modelo = request.form.get('modelo', type=str)
    marca = request.form.get('marca', type=str)
    tipo = request.form.get('tipo', type=str)
    status = request.form.get('status', type=str)

    novoCarro = Carro(modelo, marca, tipo, status)

    carros.append(novoCarro)
    return redirect('/')

#route to delete cars
@webApp.route('/carro/excluir/<int:index>')
def excluir(index):
    carros.pop(index)
    return redirect('/')

#route to edit cars
@webApp.route('/carro/editar/<int:index>')
def editar(index):
    return render_template('editar.html', titulo="Editar", automovel=carros[index], index=index)

#account upload route
@webApp.route('/carro/update', methods=['POST', ])
def update():
    automovel = carros[request.form.get('index', type=int)]
    automovel.modelo = request.form.get('modelo', type=str)
    automovel.marca = request.form.get('marca', type=str)
    automovel.tipo = request.form.get('tipo', type=str)
    automovel.status = request.form.get('status', type=str)

    return redirect('/')

#webApp startup
webApp.run(debug='enable')