import Box from "@mui/material/Box";
import React from "react";
import Card from '@/components/Card';

const Home = () => {
  return (
    <Box 
      className = "container"
      sx={{
          backgroundColor: "#141414", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center" 
      }}
    >
      <Card />
    </Box>
  );
};

export default Home;
