import React from 'react';

// Components
import Quote from '../components/Quote';
import Form from './Form';
import PlaceholderText from './PlaceholderText';

const Home = (props) => (
  <section {...props} className="home">
    <div className="container">
      <Quote />

      <Form />
      <PlaceholderText />
    </div>
  </section>
);

export default Home;
