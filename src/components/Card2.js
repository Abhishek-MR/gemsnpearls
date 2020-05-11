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
          I-Maths
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Chrysaalis i-Maths an International program that lays a foundation on Mathematical concepts training the concrete way. Building their reasoning skills, analytical skills, visualization skill, concentration etc.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
