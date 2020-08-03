export const columns = [
  { title: "Nombre de usuario", field: "name" },
  { title: "E-mail", field: "email" },
];

export const localization = {
  pagination: {
    labelDisplayedRows: "{from}-{to} de {count}",
    labelRowsSelect: "filas",
    firstAriaLabel: "Primera Pagina",
    firstTooltip: "Primera Pagina",
    previousAriaLabel: "Pagina Anterior",
    previousTooltip: "Pagina Anterior",
    nextAriaLabel: "Siguiente Pagina",
    nextTooltip: "Siguiente Pagina",
    lastAriaLabel: "Ultima Pagina",
    lastTooltip: "Ultima Pagina",
  },
  header: {
    actions: "Acciones",
  },
  body: {
    emptyDataSourceMessage: "No hay usuarios para mostrar",
    filterRow: {
      filterTooltip: "Filtrar",
    },
  },
  toolbar: {
    searchTooltip: "Buscar",
    searchPlaceholder: "Buscar"
  }
};
