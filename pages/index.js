import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
// import { Container } from './styles';

import withAnalyics from '../src/hocs/withAnalytics';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#72B340" />
      <meta
        name="description"
        content="make your Next.js application work offline using service workers via Google's workbox"
      />

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
