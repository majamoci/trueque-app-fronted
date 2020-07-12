import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import SignUp from "./auth/signUp";
import Template from "./dashboard/Template";
import SignIn from "./auth/singIn";
import RecoverPassword from "./auth/recoverPassword";
import NewPassword from "./auth/newPassword"
import { AuthRoute, LoginRequiredRoute } from "./shared/authenticated";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <h2>Hola, esta es la pagina principal</h2>
        <Link to="/login">Ingresar</Link>
      </Route>
      <AuthRoute path="/login" component={SignIn} />
      <AuthRoute path="/register" component={SignUp} />
      <Route path="/recoverpassword" component={RecoverPassword} />
      <Route path="/formularioRecuperarContrasena" > 
        
        <h2 style={{textAlign: 'center'}} >Verifica tu email <br></br>
            Hemos enviado una nueva contraseña a <br></br>
            mrcaiza1@espe.edu.ec
        </h2>
                
        <Route path="/formularioRecuperarContrasena" component={NewPassword} />
        
      </Route>


      <LoginRequiredRoute path="*" component={Template} />
    </Switch>
  );
}