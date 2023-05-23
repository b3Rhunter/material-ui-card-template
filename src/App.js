import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveCard from './ResponsiveCard';
import image from './images/bg.png';

const App = () => {
  return (
    <Router>
      <div>
        <ResponsiveCard 
          image={image} 
          title="Template" 
          buttonText="connect" 
        />
      </div>
    </Router>
  );
}

export default App;
