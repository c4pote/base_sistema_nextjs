import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Perfil = ({ user }) => (
  <div>
    <Head>
      <title>Perfil</title>
    </Head>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} width="200" />
    <br />
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>
);

Perfil.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/users/c4pote'
  );

  return { user: response.data }
}

export default withAnalytics()(Perfil);