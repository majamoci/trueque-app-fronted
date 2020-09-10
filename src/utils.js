import Axios from "axios";

const toType = (obj) => {
  return {}.toString
    .call(obj)
    .match(/\s([a-z|A-Z]+)/)[1]
    .toLowerCase();
};

export const isEmpty = (el) => {
  switch (toType(el)) {
    case "object":
      return Object.getOwnPropertyNames(el).length === 0;
    case "array":
    case "string":
      return el.length === 0;
    default:
      // aún no funciona para más tipos
      break;
  }
};

export default class Auth {
  constructor() {
    this.local = localStorage;
    this.session = sessionStorage;
    this.isLocal = "AUTH" in this.local;
    this.isSession = "AUTH" in this.session;
  }

  authenticated() {
    return this.isLocal || this.isSession;
  }

  role() {
    let r = "N"; // no login

    if (this.isLocal) r = this.local.getItem("AUTH");
    if (this.isSession) r = this.session.getItem("AUTH");
    return r.charAt(r.length - 1);
  }

  login(type, data) {
    if (type) this.local.setItem("AUTH", data);
    if (!type) this.session.setItem("AUTH", data);
  }

  logout() {
    if (this.isLocal) this.local.removeItem("AUTH");
    if (this.isSession) this.session.removeItem("AUTH");
  }

  token() {
    let token = ""; // no login

    if (this.isLocal) token = this.local.getItem("AUTH");
    if (this.isSession) token = this.session.getItem("AUTH");
    return token.slice(0, token.length - 2);
  }

  getUser() {
    Axios.get(`${process.env.REACT_APP_API_URI}api/user/`, {
      headers: {
        Authorization: `Bearer ${this.token()}`,
      },
    })
      .then((res) => res.data)
      .then((data) =>
        sessionStorage.setItem("user_data", JSON.stringify(data))
      );
  }
  verifyUserSession() {
    if (!sessionStorage.getItem('user_data')){
      this.getUser();
      this.getUserId();
      this.getUserName();
    }
  }
  getUserId() {
   let data = sessionStorage.getItem('user_data');
    data = JSON.parse(data);
  return(data.id)
  }
  getUserName() {
    let data = sessionStorage.getItem('user_data');
    data = JSON.parse(data);
  return(data.name) 
  }

}
