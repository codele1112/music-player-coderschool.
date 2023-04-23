import { useState, createContext } from "react";
import Track1 from "../tracklist/track1.mp3";
import Track2 from "../tracklist/track2.mp3";
import Track3 from "../tracklist/track3.mp3";
import Track4 from "../tracklist/track4.mp3";
import Track5 from "../tracklist/track5.mp3";
import Track6 from "../tracklist/track6.mp3";
import Track7 from "../tracklist/track7.mp3";
import Track8 from "../tracklist/track8.mp3";
import Track9 from "../tracklist/track9.mp3";
import Track10 from "../tracklist/track10.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Futuristic Beat",
      author: "RoyaltyFreeMusic",
      file: Track1,
    },
    {
      name: "Eco Technology",
      author: "Lexin_Music",
      file: Track2,
    },
    {
      name: "Ambient Classical Guitar",
      author: "Music_For_Videos",
      file: Track3,
    },
    {
      name: "Smoke",
      author: "William_King",
      file: Track4,
    },
    {
      name: "Floating Abstract",
      author: "ComaStudio",
      file: Track5,
    },
    {
      name: "Coniferous forest",
      author: "SoulProdMusic",
      file: Track6,
    },
    {
      name: "Waterfall",
      author: "RomanSenykMusic",
      file: Track7,
    },
    {
      name: "Modern Vlog",
      author: "RoyaltyFreeMusic",
      file: Track8,
    },
    {
      name: "Easy Lifestyle",
      author: "RoyaltyFreeMusic",
      file: Track9,
    },
    {
      name: "Risk",
      author: "StudioKolomna",
      file: Track10,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);

  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
