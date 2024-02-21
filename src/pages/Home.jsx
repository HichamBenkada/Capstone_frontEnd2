import React, { useState } from 'react';
import Banner from '../components/Banner';
import Shop from './Shop';
const Home = () => {
  const [search, setSearch] = useState('read');

  return (
    <>
    <Banner setSearch={setSearch} />
    <Shop search={search} />
    </>
  )
}

export default Home

