import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const post = {
  title: 'Technical Skills',
  description:
    'This page is under construction.',
  image: 'https://source.unsplash.com/Wiu3w-99tNg',
  imageText: 'Image Text',
}
const tempImage = "https://source.unsplash.com/Wiu3w-99tNg";

const useStyles = makeStyles({
  card: {
    display: 'flex',
    minHeight: 400
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 120,
  },
  cardContentDescription: {
    marginTop: 20
  },
  imageCaption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function Technical() {
  const classes = useStyles();

  return (
    <main>
      {/* <Divider/> */}
      <br/>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Divider/>
                  <Typography className={classes.cardContentDescription} variant="h6" paragraph>
                    <ErrorOutlineIcon/> 
                    {post.description}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <CardMedia
                    image={tempImage}
                    title="Placeholder"
                    style={{height: 300 }}
                  />
                  <Typography className={classes.imageCaption} component="sub" variant="subtitle2">Placeholder Image</Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </main>
  );
}
