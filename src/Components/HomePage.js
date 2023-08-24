import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Color from './common/Footer';
import { red } from '@mui/material/colors';

const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  marginTop: '8px',
  marginBottom: '2px',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '16px',
};
const cardImageStyle = {
    maxWidth: '100%',
    height: '150px', // Adjust the height as needed
    marginTop: '8px',
  };

const moviedata = [
  {
    title: 'KGF-2',
    content: 'This product is amazing! I am really satisfied with its features and performance.',
    rating: 5,
    imageUrl: '/images/kgf.jpg',
  },
  {
    title: 'OMG-2',
    content: 'The quality of this product is excellent. It exceeded my expectations.',
    rating: 4,
    imageUrl: '/images/omg2.jpg',
  },
  {
    title: 'GADAR-2',
    content: 'I made the right decision choosing this product. It offers great value for the price.',
    rating: 5,
    imageUrl: '/images/gadar2.jpg',
  },
  {
    title: 'JAILER',
    content: 'I am a satisfied customer. This product met all my requirements.',
    rating: 4,
    imageUrl: '/images/jailer.jpg',
  },
  {
    title: 'PUSHPA',
    content: 'I highly recommend this product to others. It\'s reliable and functional.',
    rating: 5,
    imageUrl: '/images/pushpa.jpg',
  },
  {
    title: 'RRR',
    content: 'This product is truly awesome! It\'s easy to use and provides great results.',
    rating: 5, // Corrected value here
    imageUrl: '/images/rrr.jpg',
  },
];

function Home() {
    return (
      <>
      <div style={{textAlign:'center',  }}>
        <marquee behavior="" direction="right">
      <h1 style={{color:`red`}}>
      <b>
        **TOP RATED MOVIES COLLECTIONS**
      </b>
      </h1>
        </marquee>
      </div>

      <div>
      <img style={{width:`100%`,height:`30vh`}}  src="/bgim.jpg" alt="" />
      </div>
      
      <div style={rootStyle}>
        <CssBaseline />
        <Container component="main" style={mainStyle} maxWidth="md">
          <div style={cardContainerStyle}>
            {moviedata.map((review, index) => (
              <Card key={index} variant="outlined" style={{ width: '30%', padding: '16px' }}>
                <CardContent>
                  <Typography variant="h6">{review.title}</Typography>
                  <img src={review.imageUrl} alt={`Product ${index + 1}`} style={cardImageStyle} />
                  <Typography>{review.content}</Typography>
                  <Rating value={review.rating} readOnly />
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
        {/* Add your footer here */}
      </div>
    </>
    );
  }
  
  export default Home;