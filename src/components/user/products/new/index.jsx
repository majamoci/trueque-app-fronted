import React from "react";
import NewProductForm from "./NewProductForm";
import { createProduct } from "../service";

const initial_form = {
  name: "",
  price: "",
  category: "",
};

export default function NewProduct() {
  const handleSubmit = (formData) => {
    createProduct(formData);
  };

  return <NewProductForm onSubmit={handleSubmit} values={initial_form} />;
}
