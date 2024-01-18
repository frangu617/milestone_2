import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import '../App.css';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container } from '@mui/material';

import Home from './Home';
import Profile from './Profile';
import Diet from './Diet';
import WorkOut from './WorkOut';

function NavBar() {
  
  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" className="title" sx={{ flexGrow: 1 }}>
                Fitness App
              </Typography>
              <Tabs value={false} aria-label="nav tabs">
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Profile" component={Link} to="/profile" />
                <Tab label="Diet" component={Link} to="/diet" />
                <Tab label="Workout" component={Link} to="/workout" />
              </Tabs>
            </Toolbar>
          </Container>
        </AppBar>

        <div className='display'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/workout" element={<WorkOut />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default NavBar;
