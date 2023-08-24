import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your contact form submission logic here
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default ContactUs;
