import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import Typography from "@mui/material/Typography";
import "./index.css";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Typography
          className="title"
          sx={{
            pt: 5,
            pb: 5,
            fontSize: 35,
            color: "#fff",
            letterSpacing: 10,
            textShadow: "2px 2px 8px yellow",
            filter: "bright(1.3)",
            ml: 60,
            mr: 60,
            textAlign: "center",
            fontFamily: "Roboto",
          }}
        >
          MUSIC PLAYER
        </Typography>
        <Controller className="controller" />
        <TrackList />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
