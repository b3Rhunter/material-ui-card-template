import { Typography } from '@mui/material';

function About() {
  return (
    <div style={{ height: '66vh', overflow: 'auto', display: 'flex', flexDirection: 'column', padding: 20 }}>
      <Typography className='title' variant="h2">About</Typography>
      <Typography className='content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ultrices massa. Nulla faucibus mauris in est dictum convallis. Mauris tempus magna vitae ultricies mattis. Aliquam mi urna, imperdiet interdum consectetur eget, lacinia quis metus. Donec eget felis non purus
      </Typography>
    </div>
  );
}

export default About;
