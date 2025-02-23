import React, {useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SongList from './SongList'
import ArtistsList from './ArtistsList';
import AlbumList from "./AlbumList";

function DataSection() {
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
          </Tabs>
          <Box sx={{mt:2}}>
            {value === 0 && <SongList/>}
            {value === 1 && <AlbumList/>}
            {value === 2 && <ArtistsList/>}
          </Box>
        </Box>
        </div>
    </>
  )
}

export default DataSection