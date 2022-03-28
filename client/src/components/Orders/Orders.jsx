import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../redux/actions/orderByName";
import { orderByScore } from "../../redux/actions/orderByScore";
import { orderByPrice } from "../../redux/actions/orderByPrice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function Orders({ setCurrentPage, filtered }) {
  const dispatch = useDispatch();

  const [orderName, setOrderName] = useState("");
  const [orderScore, setOrderScore] = useState("");
  const [orderPrice, setOrderPrice] = useState("");

  function handleChangeName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value, filtered));
    setCurrentPage(1);
    setOrderName(e.target.value);
  }

  const handleChangeScore = (e) => {
    e.preventDefault();
    dispatch(orderByScore(e.target.value, filtered));
    setCurrentPage(1);
    setOrderScore(e.target.value);
  };

  const handleChangePrice = (e) => {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value, filtered));
    setCurrentPage(1);
    setOrderPrice(e.target.value);
  };

  return <div></div>;
}
