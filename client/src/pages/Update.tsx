import React from "react";
import FormCar from "../components/FormCar";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
const Update = () => {
  const param = useParams();

  return (
    <>
      <Header />
      <FormCar id={param.id} />
    </>
  );
};

export default Update;
