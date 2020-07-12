import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRouter from "./components/mainRouter";

import {Provider} from 'react-redux';//el componente {Provider} conecta la aplicacion con redux
import store from "./redux/store";
function App() {

  return (
    //envolvemos toda la aplicacion con provider
    //al idicarle el store que se esta pasando, hemos conectado ya con redux 
    <Provider store={store} > 
    {/* ya esta enlazada la aplicacion */}
    <Router>
      <MainRouter />
    </Router>
    </Provider>
  );
  
}

export default App;
