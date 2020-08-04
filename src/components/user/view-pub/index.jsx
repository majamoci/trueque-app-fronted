/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridPub from "./elements/GridPub";
import { useState } from "react";
import { isEmpty } from "../../../utils";
// import fetchGetPub from '../../../redux/actions/publications/view.action'

const publicados = [
  {
    img: "https://source.unsplash.com/random/1600x900",
    title: "Titulo-publicados",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/random/1600x900",
    title: "Titulo-publicados",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/random/1600x900",
    title: "Titulo-publicados",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/random/1600x900",
    title: "Titulo-publicados",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
];
const borradores = [
  {
    img: "https://source.unsplash.com/1600x900/?weekly=water",
    title: "Titulo-borradores",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?nature,water",
    title: "Titulo-borradores",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?animals,coffee",
    title: "Titulo-borradores",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?comics,heroes",
    title: "Titulo-borradores",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
];
const intercambiados = [
  {
    img: "https://source.unsplash.com/1600x900/?weekly=water",
    title: "Titulo-intercambio",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?nature,water",
    title: "Titulo-intercambio",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?animals,coffee",
    title: "Titulo-intercambio",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?comics,heroes",
    title: "Titulo-intercambio",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
];

export default function ViewPub({ type }) {
  const dispatch = useDispatch();
  // const viewSt = useSelector(store => store.publications._view);
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   const { errors: res, data } = viewSt;
  //   if (!isEmpty(res)) {
  //     const err = res.errors;
  //     // do something
  //   }

  //   if (!isEmpty(data)) {
  //     // const { publications } = data;
  //     // setCards(publications);
  //   }
  // }, [viewSt])

  useEffect(() => {
    // type: draft|published|complete
    let state = 'published';
    switch (type) {
      case "borradores": {
        setCards(borradores);
        state = 'draft';
        break;
      }
      case "intercambiados": {
        setCards(intercambiados);
        state = 'complete';
        break;
      }
      default: {
        setCards(publicados);
        state = 'published';
        break;
      }
    }
    // dispatch(fetchGetPub(state));
  }, [type]);

  return <GridPub data={cards} />;
}
