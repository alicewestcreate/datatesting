import React from 'react'
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import FetchAPI from './services.js/FetchAPI';

export default function MyApp() {
  return (
    <div>
      {/* <Button variant="contained">Hello World</Button> */}
      <FetchAPI/>
    </div>
  );
}