import React from 'react';

import Link from 'next/link';
// import { Container } from './styles';

const Home = () => (
  <div>
    <h1>Links</h1>
    <Link href="/projetos">
      <a>Projetos</a>
    </Link>
  </div>
);

export default Home;
