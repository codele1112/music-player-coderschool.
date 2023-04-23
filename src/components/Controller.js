import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import useMusicPlayer from "../hooks/useMusicPlayer";

export default function Controller() {
  const theme = useTheme();
  const {
    isPlaying,
    togglePlay,
    currentTrackName,
    currentTrackAuthor,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  return (
    <Card sx={{ ml: 60, mr: 60 }}>
      <Box>
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Typography component="div" variant="h5">
            {currentTrackName}
          </Typography>
          <Typography component="div" variant="h8">
            {currentTrackAuthor}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", justifyContent: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={playPreviousTrack}>
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={togglePlay}>
            {!isPlaying ? <PlayArrowRoundedIcon /> : <PauseRoundedIcon />}
          </IconButton>
          <IconButton aria-label="next" onClick={playNextTrack}>
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
