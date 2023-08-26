import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const theme = useTheme(); // Access MUI theme

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 10,
        border: "1px solid #e3e3e3",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        maxWidth: {
          xs: 200, // Set width to 200px for xs devices
          sm: 200, // Set width to 200px for sm devices
          md: "xs", // Use the default width for md and larger devices
          lg: 400,
        },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          border: "none",
          outline: "none",
          flexGrow: 1,
        }}
      />
      <IconButton type="submit" sx={{ color: "red" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
