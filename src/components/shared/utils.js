const toType = (obj) => {
  return {}.toString
    .call(obj)
    .match(/\s([a-z|A-Z]+)/)[1]
    .toLowerCase();
};

export const isEmpty = (el) => {
  switch (toType(el)) {
    case 'object':
      return Object.getOwnPropertyNames(el).length === 0;
    case 'array':
    case 'string':
      return el.length === 0;
    default:
      // aún no funciona para más tipos
      break;
  }
}

export const role = () => {
  const local = "AUTH" in localStorage;
  const session = "AUTH" in sessionStorage;
  if (local || session) {
    const auth = local
      ? localStorage.getItem("AUTH")
      : sessionStorage.getItem("AUTH");
    const role = auth.charAt(auth.length - 1);

    return role;
  }
};
