import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Card from "@mui/material/Card";

function renderRow(props) {
  const { index, style } = props;
  const items = props.data.trackList;
  console.log("data", items);
  const play = props.data.playTrack;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton
        onClick={() => {
          play(index);
        }}
      >
        <ListItemText
          sx={{ pl: 5, fontSize: 40 }}
          primary={`${items[index].name}`}
          secondary={`${items[index].author}`}
        />
      </ListItemButton>
    </ListItem>
  );
}

function TrackList() {
  const { trackList, playTrack } = useMusicPlayer();

  return (
    <Card
      sx={{
        ml: 60,
        mr: 60,
        mt: 5,
        mb: 5,
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          pd: 1,
          pt: 1,
        }}
      >
        <FixedSizeList
          height={400}
          width="100%"
          itemSize={60}
          itemData={{ trackList, playTrack }}
          itemCount={trackList.length}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </Card>
  );
}

export default TrackList;
