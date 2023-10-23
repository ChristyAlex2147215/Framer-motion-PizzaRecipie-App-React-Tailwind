import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {

  // Define a function to handle the button click and navigate to /pizza-type
  return (
    <div className='flex flex-col flex-auto h-full'>
      <Header />
      <div className='flex flex-col justify-center h-full'>
        <div className='flex justify-center mb-20'>
          <p className='text-5xl md:pl-3'>Create your Favorite Pizza</p>
        </div>
        <Link to="/pizza-type" className='flex justify-center'>
          <Button
            title="Start"
            borderColor="blue"
            bgColor="violet"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
