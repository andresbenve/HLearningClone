import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/getAllCategories";
import { filterByCategories } from "../../redux/actions/filterByCategories";
import { filterRangeByPrice } from "../../redux/actions/filterRangeByPrice";
/* import { getAllCourses } from "../../redux/actions/getAllCourses"; */
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function Filters({ setCurrentPage }) {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.getCategories.getAllCategories
  );
  const [filterCategories, setFilterCategories] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  function handleSelectCategories(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByCategories(e.target.value));
    setFilterCategories(e.target.value);
  }

  function handlePriceByRange(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterRangeByPrice(e.target.value));
    setFilterPrice(e.target.value);
  }

  return <div></div>;
}
