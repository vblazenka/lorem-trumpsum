import React from 'react';

// Components
import Quote from '../components/Quote';
import Logo from '../components/Logo';
import Form from './Form';
import PlaceholderText from './PlaceholderText';

const Home = (props) => (
  <section {...props} className="home">
    <div className="container">
      <Logo />
      <Quote />

      <Form />
      <PlaceholderText />
    </div>
  </section>
);

export default Home;
