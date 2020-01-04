import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
// import { Container } from './styles';

import withAnalyics from '../src/hocs/withAnalytics';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/heroes-4.png" width="200" />
    <h1>Links</h1>
    <Link href="/projetos">
      <a>Projetos</a>
    </Link>
    <br />
    <Link href="/perfil">
      <a>Perfil</a>
    </Link>
  </div>
);

export default withAnalyics()(Home);
