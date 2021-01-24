import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import Header from '../common/Header';
import Footer from '../common/Footer';

import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

import mainFeaturedPost from './content/mainPost.json';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const headerTitle = 'Anwell M';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Projects', url: '#' },
  { title: 'Technical Skills', url: '#' },
  { title: 'About Me', url: '#' }
  // { title: 'Technology', url: '#' },
  // { title: 'Design', url: '#' },
  // { title: 'Culture', url: '#' },
  // { title: 'Business', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' }
];

const featuredPosts = [
  {
    title: 'Short Tearm Goals',
    date: 'Jan 24, 2021',
    description:
      'I am currently looking to get some exposure to Spring Boot (Java Framework), Docker/Kubernetes and Google Cloud Services. I am hoping integrate these here so if you have any tips or ideas, please let me know!',
    image: 'https://source.unsplash.com/4hbJ-eymZ1o',
    imageText: 'Image Text',
  },
  {
    title: 'Travel Destinations',
    date: 'Jan 01, 2021',
    description:
      'Seongsan Ilchulbong (Jeju-do, South Korea), Fushimi Inari Taisha (Kyoto, Japan), Ruifeng Night Market (Kaohsiung City, Taiwan)',
    image: 'https://source.unsplash.com/rf6ywHVkrlY',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={headerTitle} sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description="“Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.”
        ― Mother Theresa"
      />
    </React.Fragment>
  );
}
