import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 275,
    verticalAlign: 'middle',
    paddingTop:"3px",
    paddingBottom:"3px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textTransform: "uppercase",
  },
  upper:{
    textTransform: "uppercase",
  },
  button: {
      backgroundColor: "#000000",
      color: "#ffffff",
      borderColor:"#ffffff",
      margin: "auto",
      borderRadius: "0px",
      "&:hover": {
        color: "#000000",
        backgroundColor: "#ffffff",
        borderColor:"#000000",
      }
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2" style={{paddingTop:"10px"}}>
            {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" style={{paddingTop:"10px"}}>
            <Chip color="secondary" label={props.subtitle} icon={<FaceIcon />} />
        </Typography>
        <Typography variant="body1" component="p">
            {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button className={classes.button} variant="outlined" color="secondary">
           <b>
            {props.cta} 
          </b>
      </Button>
      </CardActions>
    </Card>
  );
}