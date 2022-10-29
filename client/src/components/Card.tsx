import { BsTrash, BsPencilSquare } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import url from "../hooks/axios";
import FormCar from "./FormCar";

type Cars = {
  id: number;
  brand: string;
  model: string;
  type: string;
  available: boolean;
  price: number;
};

const Card = () => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [formCar, setFormCar] = useState<boolean>(false);

  const HandleDeleteCar = (id: number) => {
    url.delete(`/cars/${id}`).then((res) => {
      console.log(res.data.message);
    });
  };

  useEffect(() => {
    url.get("/cars").then((res) => {
      setCars(res.data);
    });
  }, [cars]);

  return (
    <ul role="list" className="grid grid-cols-1 m-4 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cars.map((car) => (
        <li key={car.id} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src="https://i.picsum.photos/id/1071/3000/1996.jpg?hmac=rPo94Qr1Ffb657k6R7c9Zmfgs4wc4c1mNFz7ND23KnQ" alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">Marca {car.brand}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dd className="text-gray-500 text-sm">Modelo {car.model}</dd>
              <span className="px-2 py-1  text-xs font-medium uppercase">{car.type}</span>
              <dd className="text-gray-500 text-sm">R$ {car.price}</dd>
            </dl>
            {car.available ? (
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">Disponível</span>
              </dd>
            ) : (
              <dd className="mt-3">
                <span className="px-2 py-1 text-red-800 text-xs font-medium bg-red-100 rounded-full">Indisponível</span>
              </dd>
            )}
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <Link
                  to={`/car/${car.id}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <BsPencilSquare className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Atualizar</span>
                </Link>
              </div>
              <div className="-ml-px w-0 flex-1 flex text-red-400 hover:text-gray-400">
                <button
                  onClick={() => HandleDeleteCar(car.id)}
                  className="relative w-0 flex-1 inline-flex items-center text-red-00 hover:text-red-600 justify-center py-4 text-sm font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <BsTrash className="w-5 h-5 " aria-hidden="true" />
                  <span className="ml-3  ">Deletar</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
