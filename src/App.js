import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import icons
import TimerIcon from '@material-ui/icons/Timer';
import MenuOpenIcon from "@material-ui/icons/MenuOpen"
import AdjustIcon from '@material-ui/icons/Adjust'
//import pictures
import lakeInniscaraThumb from "./images/lake-inniscarra-thumb.jpg"
import lakeInniscaraTrainer from "./images/lake-inniscarra-trainer.jpg"
import performanceSeriesThumb from "./images/performance-series-thumb.jpg"
import performanceSeriesTrainer from "./images/performance-series-trainer.jpg"
import slowPullsThumb from "./images/slow-pulls-thumb.jpg"
import slowPullsTrainer from "./images/slow-pulls-trainer.jpg"
import minutesToTonedThumb from "./images/20-minutes-to-toned-thumb.jpg"
import minutesToTonedTrainer from "./images/20-minutes-to-toned-trainer.jpg"
import charlesRaceThumb from "./images/charles-race-thumb.jpg"
import charlesRaceTrainer from "./images/charles-race-trainer.jpg"
import hiitTrainingThumb from "./images/full-body-hiit-thumb.jpg"
import hiitTrainingTrainer from "./images/full-body-hiit-trainer.jpg"
import kafueThumb from "./images/kafue-river-thumb.jpg"
import kafueTrainer from "./images/kafue-river-trainer.jpg"
import shredThumb from "./images/shred-and-burn-thumb.jpg"
import shredTrainer from "./images/shred-and-burn-trainer.jpg"

import "./index.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    fontFamily: 'openSans',
    margin: '10px',
    minHeight: '300px'
  },

});

export default function ImgMediaCard() {
  const classes = useStyles();
  const initialState = {
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
    card8: false,
  }
  const [isActive, setActive] = useState(initialState);


  return (
    <div className="flex-evenly">
      <Card className={isActive.card1 ? "big-box-shadow" : classes.root} onClick={() => { setActive({ ...initialState, card1: !isActive.card1 }) }}>
        <CardMedia
          component="img"
          image={lakeInniscaraThumb}
          title="Lake Inniscara"
        />

        <CardContent className="flex">
          <Typography gutterBottom variant="h6" component="h2">
            Lake Inniscarra, Ireland - Pyramid
          </Typography>
          <CardMedia
            component="img"
            image={lakeInniscaraTrainer}
            className="small-image" />

        </CardContent>
        <CardContent className="flex padding-top-0">
          <TimerIcon className="margin-right" />
          <Typography className="margin-right">
            30:53
            </Typography>
          <AdjustIcon className="margin-right" />
          <Typography>
            6,248 M
            </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className="blue">
            View Details
        </Button>
        </CardActions>
      </Card>
      <Card className={isActive.card2 ? "big-box-shadow" : classes.root} onClick={() => { setActive({ ...initialState, card2: !isActive.card2 }) }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={performanceSeriesThumb}
            title="Lake Inniscara"
          />
          <div className="text">
            <Typography className="margin-top-50" variant="h5" component="h3">
              9
            </Typography>
            <Typography variant="caption">
              WORKOUTS
            </Typography>
            <MenuOpenIcon />
          </div>
        </CardActionArea>

        <CardContent className="space-between">
          <Typography gutterBottom variant="h6" component="h2">
            Performance Series
          </Typography>
          <CardMedia
            component="img"
            image={performanceSeriesTrainer}
            className="small-image" />

        </CardContent>
      </Card>
      <Card className={isActive.card3 ? "big-box-shadow" : classes.root} onClick={() => { setActive({ ...initialState, card3: !isActive.card3 }) }}>
        <CardMedia
          component="img"
          image={slowPullsThumb}
          title="Lake Inniscarra"
        />
        <CardContent className="flex">
          <Typography gutterBottom variant="h6" component="h2">
            Slow Pulls and Fast Intervals
          </Typography>
          <CardMedia
            component="img"
            image={slowPullsTrainer}
            className="small-image" />

        </CardContent>
        <CardContent className="flex padding-top-0">
          <TimerIcon className="margin-right" />
          <Typography className="margin-right">
            44:13
            </Typography>
          <AdjustIcon className="margin-right" />
          <Typography>
            9,948 M
            </Typography>
        </CardContent>
      </Card>
      <Card className={isActive.card4 ? "big-box-shadow" : classes.root} onClick={() => { setActive({ ...initialState, card4: !isActive.card4 }) }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={minutesToTonedThumb}
            title="Lake Inniscara"
          />
          <div className="text">
            <Typography className="margin-top-50" variant="h5" component="h3">
              12
        </Typography>
            <Typography variant="caption">

              WORKOUTS
        </Typography>
            <MenuOpenIcon />
          </div>
        </CardActionArea>

        <CardContent className="space-between">
          <Typography gutterBottom variant="h6" component="h2">
            20 Minutes to Toned
          </Typography>
          <CardMedia
            component="img"
            image={minutesToTonedTrainer}
            className="small-image" />

        </CardContent>
      </Card>
      <Card className={isActive.card5 ? "big-box-shadow" : classes.root} onClick={() => { setActive({ ...initialState, card5: !isActive.card5 }) }}>
        <CardMedia
          component="img"
          image={charlesRaceThumb}
          title="Charles Race"
        />

        <CardContent className="flex">
          <Typography gutterBottom variant="h6" component="h2">
            Charles Race, Boston, Massachusetts
          </Typography>
          <CardMedia
            component="img"
            image={charlesRaceTrainer}
            className="small-image" />

        </CardContent>
        <CardContent className="flex padding-top-0">
          <TimerIcon className="margin-right" />
          <Typography className="margin-right">
            36:22
            </Typography>
          <AdjustIcon className="margin-right" />
          <Typography>
            8,648 M
            </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <Card className={isActive.card6 ? "big-box-shadow" : classes.root} onClick={() => { setActive({ ...initialState, card6: !isActive.card6 }) }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={hiitTrainingThumb}
            title="Lake Inniscara"
          />
          <div className="text">
            <Typography className="margin-top-50" variant="h5" component="h3">
              12
        </Typography>
            <Typography variant="caption">

              WORKOUTS
        </Typography>
            <MenuOpenIcon />
          </div>
        </CardActionArea>

        <CardContent className="space-between">
          <Typography gutterBottom variant="h6" component="h2">
            Full Body HIIT Series
          </Typography>
          <CardMedia
            component="img"
            image={hiitTrainingTrainer}
            className="small-image" />

        </CardContent>
      </Card>
      <Card className={isActive.card7 ? "big-box-shadow" : classes.root} onClick={() => { setActive({ ...initialState, card7: !isActive.card7 }) }}>
        <CardMedia
          component="img"
          image={kafueThumb}
          title="Kafue River"
        />

        <CardContent className="flex">
          <Typography gutterBottom variant="h6" component="h2">
            Kafue River, Zambia - Power Stroke Pyramid
          </Typography>
          <CardMedia
            component="img"
            image={kafueTrainer}
            className="small-image" />

        </CardContent>
        <CardContent className="flex padding-top-0">
          <TimerIcon className="margin-right" />
          <Typography className="margin-right">
            22:22
            </Typography>
          <AdjustIcon className="margin-right" />
          <Typography>
            4,660 M
            </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <Card className={isActive.card8 ? "big-box-shadow" : classes.root} onClick={() => { setActive({ ...initialState, card8: !isActive.card8 }) }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={shredThumb}
            title="Shred and Burn"
          />
          <div className="text">
            <Typography className="margin-top-50" variant="h5" component="h3">
              16
        </Typography>
            <Typography variant="caption">

              WORKOUTS
        </Typography>
            <MenuOpenIcon />
          </div>
        </CardActionArea>

        <CardContent className="space-between">
          <Typography gutterBottom variant="h6" component="h2">
            Shred & Burn Series
          </Typography>
          <CardMedia
            component="img"
            image={shredTrainer}
            className="small-image" />

        </CardContent>
      </Card>
    </div>
  );
}
