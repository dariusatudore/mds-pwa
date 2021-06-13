import React, { useState, useMemo } from "react";
import TinderCards from "react-tinder-card";
import "./Cards.css";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

const db = [
  {
    name: "Roxana Ionescu",
    url: "https://www.curentul.info/wp-content/uploads/2017/09/13-rox.jpg",
  },
  {
    name: "Chef Scarlatescu",
    url: "https://scontent-otp1-1.xx.fbcdn.net/v/t1.15752-9/186865885_609315566693816_3078965018968254603_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=MoxShB7BCWUAX8Qupyb&_nc_ht=scontent-otp1-1.xx&oh=ffd30368efee267cf4881d13870b4f36&oe=60C67904",
  },
  {
    name: "Killa Fonic",
    url: "https://cloudia.cms.protvplus.ro/r620x350n/26de434a-3edf-4c74-b282-c32c0ac850ba?default=b507a3ad-e712-494d-9667-5274d0c05bca",
  },
  {
    name: "Azteca",
    url: "https://scontent-otp1-1.xx.fbcdn.net/v/t1.15752-9/187371094_1005930666607520_4436855636917238988_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=vfdSdwhqJrkAX_wM0Tg&_nc_ht=scontent-otp1-1.xx&oh=718d0aabc0a92bbd2f93682e7e6b12f0&oe=60C5EB6F",
  },
  {
    name: "Irina Loghin",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Irina_Loghin.jpg",
  },
  {
    name: "Dorian Popa",
    url: "https://playtech.ro/stiri/wp-content/uploads/2020/08/Ce-a-f%C4%83cut-Dorian-Popa-%C3%AEn-ziua-%C3%AEn-care-a-%C3%AEmplinit-32-de-ani.-Ce-surpriz%C4%83-pentru-artist.jpg",
  },
];

const alreadyRemoved = [];
const swipedRight = [];
const swipedLeft = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Cards() {
  const [characters, setCharacters] = useState(db);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    const index = db.map((person) => person.name).indexOf(nameToDelete); // Find the index of which to make the reference to
    if (direction === "right") {
      swipedRight.push(db[index]);
      console.log(swipedRight);
    } else {
      swipedLeft.push(db[index]);
      console.log(swipedLeft);
    }
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      console.log(alreadyRemoved);
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div className="card_container">
      {characters.map((person, index) => (
        <TinderCards
          ref={childRefs[index]}
          className="swipe"
          key={person.name}
          preventSwipe={["down", "up"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h2>{person.name}</h2>
          </div>
        </TinderCards>
      ))}

      <div className="swipeButtons">
        <IconButton
          onClick={() => swipe("left")}
          className="swipeButtons__left"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => swipe("right")}
          className="swipeButtons__right"
        >
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Cards;
