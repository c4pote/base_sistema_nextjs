import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
// import { Container } from './styles';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Links</h1>
    <Link href="/projetos">
      <a>Projetos</a>
    </Link>
  </div>
);

export default Home;
