// ResponsiveCard.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
const ResponsiveCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const NavBar = () => (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/" style={{ textDecoration: 'none' }}><Button className='navButton' variant="contained" color="primary">Home</Button></Link>
      <Link to="/about" style={{ textDecoration: 'none' }}><Button className='navButton' variant="contained" color="primary">About</Button></Link>
      <Link to="/contact" style={{ textDecoration: 'none' }}><Button className='navButton' variant="contained" color="primary">Contact</Button></Link>
    </div>
);

  let Content;
  switch (location.pathname) {
    case '/about':
      Content = <About />;
      break;
    case '/contact':
      Content = <Contact />;
      break;
    default:
      Content = <CardMedia
        component="img"
        style={{ height: '66vh', objectFit: 'cover' }}
        image={props.image}
        alt="Responsive Card Image"
      />;
  }
  return (
    <Card className='glass' style={{width: '90vw', height: '90vh', margin: 'auto', display: 'flex', flexDirection: 'column'}}>
      {Content}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '16px', justifyContent: 'space-between' }}>
        <Typography className='title' gutterBottom variant="h1" component="div">
          {props.title}
        </Typography>
        {isClicked ? <NavBar /> : <Button className='navButton' variant="contained" color="primary" onClick={handleClick}>{props.buttonText}</Button>}
      </div>
    </Card>
  );
}
export default ResponsiveCard;
