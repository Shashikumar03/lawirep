import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import flight from "../assets/flight.gif";
import FlightAnimation from "./FlightAnimation ";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import TrainTwoToneIcon from "@mui/icons-material/TrainTwoTone";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          }}
        >
          <Toolbar>
            <div>
              <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Lawirep travels
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link to={`/flight`} key="1">
                <ConnectingAirportsIcon
                  sx={{ fontSize: 50, height: 50 }}
                  className="plain"
                />
              </Link>

              <Link to={`/train`} key="1">
                <TrainTwoToneIcon
                  color="primary"
                  sx={{ fontSize: 50, height: 50 }}
                  className="train"
                />
              </Link>
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Appbar;
