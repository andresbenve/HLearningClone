import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCourseByName } from "../../redux/actions/getCourseByName";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCourseByName(name));
    setName("");
  };

  return (
    <div>
      <Box sx={{ alignContent: "center" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack direction="row" spacing={0.5}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Buscar"
              variant="outlined"
              name="curso"
              type="text"
              placeholder="Curso..."
              onChange={(e) => handleInputChange(e)}
              value={name}
            />
            <Button variant="contained" type="submit">
              <SearchIcon />
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}
