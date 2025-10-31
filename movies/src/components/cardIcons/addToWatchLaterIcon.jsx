import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToWatchLaterIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchLater = (e) => {
    e.preventDefault();
    context.addToWatchLater(movie);
  };

  return (
    <IconButton aria-label="add to watch later" onClick={handleAddToWatchLater}>
      <PlaylistAddIcon fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchLaterIcon;