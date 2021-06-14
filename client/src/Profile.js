import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FireIcon from "@material-ui/icons/Whatshot";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export default function Profile(props) {
  const [requestFailed, setRequestFailed] = useState(false);

  async function getMyProfile(token) {
    fetch("http://localhost:5000/api/profile/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .catch((error) => {
        console.log("Error: " + error);
        setRequestFailed(true);
      });
  }

  let profile = getMyProfile(props.token);

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });

  if (requestFailed == true) {
    return (
      <Container component="main">
        <Typography component="h1" variant="h5">
          Looks like you don't have a profile yet. Let's create one!
        </Typography>
      </Container>
    );
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <Avatar
          style={{ height: "80px", width: "80px" }}
          src="https://playtech.ro/stiri/wp-content/uploads/2020/08/Ce-a-f%C4%83cut-Dorian-Popa-%C3%AEn-ziua-%C3%AEn-care-a-%C3%AEmplinit-32-de-ani.-Ce-surpriz%C4%83-pentru-artist.jpg"
        />
      </Container>
    );
  }
}
