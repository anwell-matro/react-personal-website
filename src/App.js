import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './common/Header';
import Footer from './common/Footer';

import Home from './home/Home.js';
import Projects from './projects/Projects.js';
import Technical from './technical/Technical.js';
import About from './about/About.js';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const headerTitle = 'Anwell M';

const sections = [
  { title: 'Home', path: '/home', url: '#' },
  // { title: 'Projects', path: '/projects', url: '#' },
  // { title: 'Technical Skills', path: '/technical', url: '#' },
  // { title: 'About Me', path: '/about', url: '#' }
];

function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title={headerTitle} sections={sections} />
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/technical">
              <Technical/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Container>
        <Footer/>
      </React.Fragment>
    </Router>
  );
}

export default App;
