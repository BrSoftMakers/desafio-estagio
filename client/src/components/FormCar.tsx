import { ChangeEvent, DetailedHTMLProps, FormEvent, InputHTMLAttributes, useState } from "react";
import url from "../hooks/axios";

const FormCar = () => {
  const [available, setAvailable] = useState<boolean>(false);
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [carType, setCarType] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [status, setStatus] = useState<string>("");
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    url
      .post("/cars", {
        brand: brand,
        model: model,
        type: carType,
        available: available,
        price: price,
      })
      .then((res) => {
        setStatus(res.data.message);
        location.href = "/";
      });
  };

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Insira um carro no banco de dados</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">Desafio proposto pela softmakers, para o cargo de desenvolvedor fullstack.</p>
        </div>
        <div className="mt-12">
          <form onSubmit={HandleSubmit} method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Marca
              </label>
              <div className="mt-1">
                <input
                  placeholder="Marca do carro"
                  type="text"
                  name="brand"
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                Modelo
              </label>
              <div className="mt-1">
                <input
                  placeholder="Modelo do carro"
                  type="text"
                  name="model"
                  id="model"
                  onChange={(e) => setModel(e.target.value)}
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Tipo
              </label>
              <div className="mt-1">
                <input
                  placeholder="Exemplo: Sedan, Hatch, SUV, Picape, etc."
                  type="text"
                  name="type"
                  id="type"
                  onChange={(e) => setCarType(e.target.value)}
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2 flex gap-2">
              <label htmlFor="available" className="flex text-sm font-medium text-gray-700">
                Dísponivel
              </label>
              <div className="mt-1 flex">
                <input
                  id="available"
                  name="available"
                  type="checkbox"
                  onChange={(e) => setAvailable(e.target.checked)}
                  className="py-3 px-4 block shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Preço em R$
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="0"
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="py-3 px-4 block shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Adicione um novo carro
              </button>
            </div>
          </form>
          <h2 className="block text-sm font-medium text-gray-700">{status}</h2>
        </div>
      </div>
    </div>
  );
};

export default FormCar;
