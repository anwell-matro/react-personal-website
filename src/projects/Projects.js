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
  title: 'Projects',
  description:
    'This page is under construction. This section will contain info about some of the projects that I have worked on.',
  image: 'https://source.unsplash.com/Wiu3w-99tNg',
  imageText: 'Image Text',
}

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 300,
  },
  cardContentDescription: {
    marginTop: 20
  }
});

export default function Projects() {
  const classes = useStyles();

  return (
    <main>
      {/* <Divider/> */}
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Divider/>
                  <Typography className={classes.cardContentDescription} variant="subtitle1" paragraph>
                    <ErrorOutlineIcon/> 
                    {post.description}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        Project A
                      </Typography>
                      <Divider/>
                      <Typography className={classes.cardContentDescription} variant="subtitle1" paragraph>
                        Content for project A.
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
                      <Typography component="h2" variant="h5">
                        Project B
                      </Typography>
                      <Divider/>
                      <Typography className={classes.cardContentDescription} variant="subtitle1" paragraph>
                        Content for project B.
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
                      <Typography component="h2" variant="h5">
                        Project C
                      </Typography>
                      <Divider/>
                      <Typography className={classes.cardContentDescription} variant="subtitle1" paragraph>
                        Content for project C.
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    Widget
                  </Typography>
                  <Divider/>
                  <Typography className={classes.cardContentDescription} variant="subtitle1" paragraph>
                    Widget Text
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Grid> */}
      </Grid>
    </main>
  );
}
