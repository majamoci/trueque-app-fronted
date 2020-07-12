const {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,
  } = require("../actions/signup.action");
  
  //definimos el estado inicial de la aplicacion
  const initial_state = {
    loading: false,
    tokens: {},
    errors: {},
  };
  
  //funciones que se dedican a cambiar el estado, state es el estado actual de la aplicacion
  //action-> la funcion que viene desde la carpeta actions, puede ser cualquiera de las tres acciones definidas
  function register(state = initial_state, action) {
    //action.type-> preguntamos que accion es? pude ser  FETCH_REGISTER_REQUEST,FETCH_REGISTER_SUCCESS o FETCH_REGISTER_FAILURE,
    switch (action.type) {
      case FETCH_REGISTER_REQUEST: {
        //si entra a este caso, retornamos a este nuevo objeto
        return {
          ...state,// del estado que se estan pasando agarre todas las llaves con todos sus valores
          loading: true,//pasamos el estado que viene en el action
          //de forma general se esta construyendo un nuevo 
          //objeto con todo lo que ya existe en el state
          //Pero cambiando la llave loading
        };
      }
      case FETCH_REGISTER_SUCCESS: {
        return {
          loading: false,
          tokens: action.payload,
          errors: {},
        };
      }
      case FETCH_REGISTER_FAILURE: {
        return {
          loading: false,
          tokens: {},
          errors: action.payload,
        };
      }
      default:
        return state;
    }
  }
  
  export default register;