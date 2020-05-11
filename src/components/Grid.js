import React from 'react';
import MyCard from './MyCard'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft : "40px",
    paddingRight : "40px"
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const cards = [
  {
    title : "Helen O’Grady International Edudrama Academy" ,
    content : "An International Speech & Drama academy that builds the 21st century skills in students eg : 5C’s Confidence, Communication, Creativity, Collaboration, Critical thinking , Enthusiasm, Self esteem, Personality Development etc."
  },
  {
    title : "I-Maths" ,
    content : "Chrysaalis i-Maths an International program that lays a foundation on Mathematical concepts training the concrete way. Building their reasoning skills, analytical skills, visualization skill, concentration etc."
  },
  {
    title : "Creativity & Physical Development " ,
    content : "Techniques like Yoga, dance , Art activities to enhance their physical growth and creativity to give wings to their ideas that can help them explore and build the best practises for their life."
  }
]
export default function SpacingGrid() {
  
  const spacing = React.useState(2);
  const classes = useStyles();

  let cardsCode = cards.map(card => {
    return (
      <Grid item xs={12} md={4}>
        <MyCard info={card}/>
      </Grid>
    )
  })
  return (
    <Grid container justify="center" className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        {cardsCode}  
        </Grid>
      </Grid>
    </Grid>
  );
}
