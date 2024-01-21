import React from 'react'
import Navigation from '../Navigation/Navigation';
import "./Home.css"
import Search from '../Search/Search';

const Home = () => {
  return (
    <div className='home'>
      <Navigation/>
      <h1 className='hero-text'>
        Discover over 2,000,000 free stock images
      </h1>
      <Search/>
    </div>
  )
}

export default Home;