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
    title: 'Technical Background',
    date: 'March 15, 2021',
    description:'',
    descriptionMultiLine: [
      {
        subtitle: 'AWS',
        text: 'Lambda, DynamoDB, KMS, Secret Manager, IAM Roles and Policies'
      },
      {
        subtitle: 'Languages',
        text: 'Java, JavaScript (NodeJS), C#'
      },
      {
        subtitle: 'Databases',
        text: 'SQL Server, Oracle DB, PostgreSQL'
      },
      {
        subtitle: 'CI/CD',
        text: 'Git, Bamboo, Artifactory, Terraform:AWS'
      },
      {
        subtitle: 'Technologies',
        text: 'TIBCO BusinessWorks, JMS (IBM MQ and Tibco EMS), Kafka, Terraform:AWS'
      }
    ],
    image: 'https://source.unsplash.com/4hbJ-eymZ1o',
    imageText: 'Image Text',
  },
  {
    title: 'Travel Destinations',
    date: 'Jan 01, 2021',
    description: '',
    descriptionMultiLine: [
      {
        subtitle: 'Japan',
        text: 'Kyoto (Fushimi Inari Taisha, Nara Park), Tokyo (Ginza, Akihabara, Omotesando)'
      },
      {
        subtitle: 'South Korea',
        text: 'Jeju-do (Seongsan Ilchulbong), Seoul (Myeongdong, Hongdae)'
      },
      {
        subtitle: 'Taiwan',
        text: 'Ruifeng Night Market'
      }
    ],
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
