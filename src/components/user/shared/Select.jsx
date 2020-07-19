import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, MenuItem } from "@material-ui/core";
import { categories } from "./categories";

export default function SelectCategory({ onSelect, error, helperText, value }) {
  const [category, setCategory] = useState(value);

  const handleSelect = (e) => {
    const { value } = e.target;
    setCategory(value);
    onSelect(e);
  };

  return (
    <TextField
      required
      fullWidth
      select
      value={category}
      variant="outlined"
      margin="normal"
      id="category"
      label="Categoría"
      name="category"
      autoComplete="category"
      error={error}
      helperText={helperText}
      onChange={handleSelect}
    >
      {categories.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

SelectCategory.propTypes = {
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.any,
};
