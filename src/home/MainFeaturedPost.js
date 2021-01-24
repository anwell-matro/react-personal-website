import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Link from '@material-ui/core/Link';

const social = [
  { name: 'GitHub', icon: GitHubIcon, href: "https://github.com/anwell-matro" },
  { name: 'LinkedIn', icon: LinkedInIcon, href: "https://www.linkedin.com/in/anwell-matro-18429360/" }
]

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  socialLinks: {
    color: theme.palette.common.white
  }
}));

function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ 
        backgroundImage: `url(${post.image})`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item xs={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            {post.paragraphs.map((parapgraph) => (
              <Typography variant="subtitle2" color="inherit" paragraph>
                {parapgraph}
              </Typography>
              ))
            }
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
            {social.map((network) => (
              <Link className={classes.socialLinks} display="block" variant="subtitle2" href={network.href} key={network.name}>
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item>
                    <network.icon />
                  </Grid>
                  <Grid item>{network.name}</Grid>
                </Grid>
              </Link>
            ))}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
