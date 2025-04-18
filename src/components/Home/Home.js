import React from 'react';
import Lists from '../Lists/Lists';
import PageTitle from '../PageTitle/PageTitle';
import Hero from '../Hero/Hero'
import List from '../List/List';

const Home = () => {
  return (
    <div>
      <Hero />
      <List />
      <PageTitle>Browse lists</PageTitle>
      <Lists />
    </div>
  );
};

export default Home;