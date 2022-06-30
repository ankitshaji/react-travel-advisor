import React from "react";
//import materia-ui components - ie google material design
import { CssBaseline, Grid } from "@material-ui/core"; //normalise styles,Grid
//import components - Header,List,Map
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

//App component - anonymous arrow function
const App = () => {
  return (
    //react fragment <> - single return
    <>
      {/* create component CssBaseline */}
      <CssBaseline />
      {/* create component Header */}
      <Header />
      {/* create component Grid - type container */}
      {/* settings props - spacing,style{object} */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        {/* create component Grid x2 - type item */}
        {/* settings props - xs-fullwidth{12} ie mobile,md - 4spaces medium device*/}
        <Grid item xs={12} md={4}>
          {/* create component List */}
          <List />
        </Grid>
        {/* 8spaces medium device - map component in grid component */}
        <Grid item xs={12} md={8}>
          {/* create component Map */}
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
