import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IMG from '../../public/logo.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 345

  },
  media: {
    height: 140,
  },
});

export default function MediaCard(value) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={IMG}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Helen O’Grady International Edudrama Academy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          An International Speech & Drama academy that builds the 21st century skills in students eg : 5C’s Confidence, Communication, Creativity, Collaboration, Critical thinking , Enthusiasm, Self esteem, Personality Development etc.
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}
