import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withForm } from "../../shared/hoc/withForm";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  input: {
    display: 'none',
  },
}));

function NewPublish({ _handleChange, _handleSubmit }) {
  const classes = useStyles();
  const category = [
    {
      value: 'CER',
      label: 'Cereal y derivados',
    },
    {
      value: 'EUR',
      label: 'Frutas frescas',
    },
    {
      value: 'HORT',
      label: 'Hortalizas',
    },
    {
      value: 'LEG',
      label: 'Leguminosas de grano',
    },
    {
      value: 'TUB',
      label: 'Tuberculos y raíces',
    },
  ];
  const [currency, setCurrency] = React.useState('CER');
  const handleChange = (event) => {
    setCurrency(event.target.value);
    // estado del switch
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  //Switch
  const [state, setState] = React.useState({
    checkedA: true,
  });

  //radioButton
  const [value, setValue] = React.useState('');
  const [setError] = React.useState(false);
  const [setHelperText] = React.useState('Choose wisely');
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  return (
    <form className={classes.root} noValidate >
      <Grid container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
     // wrap="nowrap"
     >
        <Grid item xs={12} sm ={6}>
          <TextField
            required
            fullWidth
            autoFocus
            variant="outlined"
            margin="normal"
            id="title"
            label="Título de la publicación"
            name="title"
            autoComplete="title"
            // error={Boolean(emailError)}
            // helperText={emailError}
            onChange={_handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3} >
          <TextField
            required
            fullWidth
            type="number"
            variant="outlined"
            margin="normal"
            id="price"
            label="Precio referencial"
            name="price"
            autoComplete="price"
            // error={Boolean(emailError)}
            // helperText={emailError}
            onChange={_handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </Grid>
        <Grid item xs={12} sm ={6}>
          <TextField
            required
            fullWidth
            multiline
            rowsMax={4}
            variant="outlined"
            margin="normal"
            id="address"
            label="Dirección"
            name="address"
            autoComplete="address"
            // error={Boolean(emailError)}
            // helperText={emailError}
            onChange={_handleChange}
          />
        </Grid>
        <Grid item xs={12} sm ={3}>
          <TextField
            required
            fullWidth
            select
            value={currency}
            variant="outlined"
            margin="normal"
            id="category"
            label="Categoría"
            name="category"
            autoComplete="category"
            // error={Boolean(emailError)}
            // helperText={emailError}
            onChange={handleChange}
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm ={6}>
          <TextField
            required
            fullWidth
            multiline
            rowsMax={4}
            variant="outlined"
            margin="normal"
            id="description"
            label="Descripción"
            name="description"
            autoComplete="description"
            // error={Boolean(emailError)}
            // helperText={emailError}
            onChange={_handleChange}
          />
        </Grid>
        <Grid item xs={12} sm ={3}>
          Disponibilidad
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="one" control={<Radio />} label="Uno" />
            <FormControlLabel value="multiple" control={<Radio />} label="Muchos" />
          </RadioGroup>
        </Grid>
        <Grid item xs={6}>
          <input type="file" id="image" name="ccl_image"
            aria-describedby="imageHelp" required
            onchange="handleFileSelect(event, 'imageView')"
            accept="image/*" />
          <small id="imageHelp" class="form-text text-muted">
            La resolución de la imagen debe ser de 500×500 px.
              </small>
          <output id="imageView" class="w-100"></output>
        </Grid>
        <Grid item xs={9} component="label" container alignItems="center" spacing={1}>
          <Grid item>Borrador</Grid>
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedA"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Grid item>Publicado</Grid>
        </Grid>

      </Grid>

    </form>
  )
}

NewPublish.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(NewPublish);