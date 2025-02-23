import React, {useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddSongs from "./AddSongs";
import AlbumDetails from "./AlbumForm";
import ArtistsDetails from "./ArtistsForm";
import MovieForm from "./MovieForm";

function Sections() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Songs" />
            <Tab label="Albums" />
            <Tab label="Artists" />
            <Tab label='Movie'/>
          </Tabs>
          <Box sx={{mt:2}}>
            {value === 0 && <AddSongs/>}
            {value === 1 && <AlbumDetails/>}
            {value === 2 && <ArtistsDetails/>}
            {value === 3 && <MovieForm/>}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Sections;
