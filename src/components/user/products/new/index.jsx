import React, { useState } from "react";
import NewProductForm from "./NewProductForm";
import { createProduct } from "../service";

const initial_form = {
  name: "",
  price: "",
  category: "",
};

export default function NewProduct() {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = (formData) => {
    setLoading(true);

    createProduct(formData).then((data) => {
      console.log(data);
      setLoading(false);
    });
  };

  return (
    <NewProductForm
      onSubmit={handleSubmit}
      open={isLoading}
      values={initial_form}
    />
  );
}
