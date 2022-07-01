import React from "react";
//Import Autocomplete component(SearchBox) - Binding to js google maps api
import { Autocomplete } from "@react-google-maps/api";
//import materia-ui components - ie google material design
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
//import makeStyles as useStyles - returns react hook
import useStyles from "./styles";

//Header Component - anonymous arrow function
const Header = () => {
  //react hook
  const classes = useStyles();
  return(
  <>
    {/* create component AppBar with prop position */}
    <AppBar position="static">
      {/* create component Toolbar with prop className */}
      <Toolbar className={classes.toolbar}>
        {/* create component Typography with prop variant,className */}
        {/* Typography is every text element - change variant to set size */}
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        {/* create component Box with prop display,it is same as div */}
        <Box display="flex">
          {/* create component Typography with prop variant,className */}
          <Typography variant="h6 " className={classes.title}>
            Explore new places
          </Typography>
          {/* create component Autocomplete ie searchbar*/}
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                {/* create component SearchIcon -selfclosing */}
                <SearchIcon />
              </div>
              {/* create component InputBase -selfclosing with props placeholder,classes={object}*/}
              <InputBase
                placeholder="Search ..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  </>
)};

export default Header;
