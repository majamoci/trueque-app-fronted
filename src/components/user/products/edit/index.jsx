import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditProductForm from "./EditProductForm";
import { updateProduct, getProduct } from "../service";

const initial_form = {
  name: "",
  price: "",
  category: "",
};

export default function NewProduct() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [values, setValues] = useState(initial_form);
  const handleSubmit = (formData) => {
    setLoading(true);

    updateProduct(formData, id)
    .then(data => {
      console.log(data)
      setLoading(false);
    });
  };

  useEffect(() => {
    getProduct(id).then((data) => setValues(data.product));
  }, [id]);

  if(values.name === "") return <p>Cargando Formulario...</p>;

  return (
    <EditProductForm onSubmit={handleSubmit} open={isLoading} values={values} />
  );
}
