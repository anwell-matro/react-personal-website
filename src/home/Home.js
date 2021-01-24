import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

import mainFeaturedPost from './content/mainPost.json';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

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

export default function Home() {
  const classes = useStyles();

  return (
    <main>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </main>
  );
}
