import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
      <div style={{ height: '66vh', overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <form style={{ display: 'flex', flexDirection: 'column', marginTop: 20, alignItems: 'center' }}>
          <TextField label="Name" variant="outlined" style={{ marginBottom: 20, width: '100%' }} />
          <TextField label="Email" variant="outlined" style={{ marginBottom: 20, width: '100%' }} />
          <TextField label="Message" variant="outlined" multiline rows={4} style={{ marginBottom: 20, width: '100%' }} />
          <Button className='submitBtn' variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
  

export default Contact;
