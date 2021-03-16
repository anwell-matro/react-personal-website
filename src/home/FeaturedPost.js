import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 120,
  },
  cardContentDescription: {
    marginTop: 20,
    minHeight: 200
  }
});

function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  let postDescriptionMultiLine = post.descriptionMultiLine == null? []: post.descriptionMultiLine;

  // if(String(post.description).length > 0){
  //   postDescription = post.description;
  // }
  // else{
  //   post.descriptionMultiLine.forEach(x => {
  //     postDescription 
  //   });
  // }

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Divider/>
              <Typography className={classes.cardContentDescription} variant="subtitle1" paragraph>
                {post.description}
                {postDescriptionMultiLine.map((d) => {
                  return (
                    <Box component="span">
                      <Box component="span" fontWeight="fontWeightBold">{"" + d.subtitle + ": "}</Box>
                      <Box component="span">{"" + d.text}</Box><br/>
                    </Box>
                  )
                })}
              </Typography>
              {/* <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography> */}
            </CardContent>
          </div>
          <Hidden smDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageText}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
