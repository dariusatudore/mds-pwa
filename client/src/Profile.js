import React, { useState } from "react";
import "./Profile.css";
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
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(1),
    display: "inline-grid",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Profile(props) {
  const [location, setLocation] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [interests, setInterests] = useState();
  const [bio, setBio] = useState();
  const [instagram, setInstagram] = useState();
  const [preference, setPreference] = useState();
  const [images, setImages] = useState();

  const [requestFailed, setRequestFailed] = useState(false);

  const [profile, setProfile] = useState([]);

  const classes = useStyles();

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
      .then(function (json) {
        setProfile(json);
      })
      .catch((error) => {
        console.log("Error: " + error);
        setRequestFailed(true);
      });
  }

  async function registerProfile(token, data) {
    fetch("http://localhost:5000/api/profile/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files.length) {
      setImages({
        name: "Profile Image",
        desc: "Profile Image",
        img: {
          data: Array.from(e.target.files[0]),
          contentType: "image/*",
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    getLocation();
    const data = await registerProfile(props.token, {
      images,
      location,
      age,
      gender,
      interests,
      bio,
      instagram,
      preference,
    });
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLocation([position.coords.latitude, position.coords.longitude]);
    });
  };

  getMyProfile(props.token);

  if (requestFailed == true) {
    return (
      <Container component="main">
        <Typography
          component="h2"
          style={{
            fontSize: "17px",
            marginTop: "30px",
          }}
        >
          Looks like you don't have a profile yet. Let's create one!
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            className="text_field"
            variant="outlined"
            margin="normal"
            required
            id="age"
            label="Age"
            name="age"
            color="secondary"
            onChange={(e) => setAge(e.target.value)}
          />
          <Select
            variant="outlined"
            margin="normal"
            required
            id="gender"
            label="Gender"
            name="gender"
            color="secondary"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>

          <TextField
            className="text_field"
            variant="outlined"
            margin="normal"
            required
            id="interests"
            label="Interests (comma-separated)"
            name="interests"
            color="secondary"
            onChange={(e) => setInterests(e.target.value)}
          />
          <TextField
            className="text_field"
            multiline
            rowsMax={Infinity}
            variant="outlined"
            margin="normal"
            required
            id="bio"
            label="Bio"
            name="bio"
            color="secondary"
            onChange={(e) => setBio(e.target.value)}
          />
          <TextField
            className="text_field"
            multiline
            rowsMax={Infinity}
            variant="outlined"
            margin="normal"
            required
            id="instagram"
            label="Instagram @"
            name="instagram"
            color="secondary"
            onChange={(e) => setInstagram(e.target.value)}
          />
          <Select
            variant="outlined"
            margin="normal"
            required
            id="preference"
            label="Preference"
            name="preference"
            color="secondary"
            onChange={(e) => setPreference(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Both"}>Both</MenuItem>
          </Select>
          <label>
            <Typography
              component="h2"
              style={{
                fontSize: "17px",
                marginTop: "10px",
              }}
            >
              Upload a picture of yourself!
            </Typography>
            <input
              accept="image/*"
              className={classes.input}
              name="images"
              style={{ display: "none" }}
              onChange={handleImage}
              type="file"
            />
            <IconButton
              color="secondary"
              className={classes.button}
              component="span"
            >
              <ImageIcon />
            </IconButton>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Save
            </Button>
          </label>
        </form>
      </Container>
    );
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <Typography
          component="h2"
          style={{
            fontSize: "17px",
            marginTop: "10px",
          }}
        >
          Age: {profile.age}
        </Typography>
        <Typography
          component="h2"
          style={{
            fontSize: "17px",
            marginTop: "10px",
          }}
        >
          Bio: {profile.bio}
        </Typography>
        <Typography
          component="h2"
          style={{
            fontSize: "17px",
            marginTop: "10px",
          }}
        >
          Gender: {profile.gender}
        </Typography>
        <Typography
          component="h2"
          style={{
            fontSize: "17px",
            marginTop: "10px",
          }}
        >
          Interests: {profile.interests}
        </Typography>
        <Typography
          component="h2"
          style={{
            fontSize: "17px",
            marginTop: "10px",
          }}
        >
          Preference: {profile.preference}
        </Typography>
      </Container>
    );
  }
}
