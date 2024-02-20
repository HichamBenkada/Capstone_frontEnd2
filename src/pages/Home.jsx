import React from 'react';
import Banner from '../components/Banner';
import FavBooks from '../components/favorites/FavBooks';

const Home = () => {
  return (
    <div>
    <Banner />
    <div className='text-center'>
    <FavBooks />
    </div>
    </div>
  )
}

export default Home