import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const PlaylistAdd = ({ movie }) => {
  return (
    <IconButton aria-label="add to watchlist">
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

//new playlist icon

export default PlaylistAdd;