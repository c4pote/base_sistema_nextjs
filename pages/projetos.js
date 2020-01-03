import React from 'react';
import axios from 'axios';

import Link from 'next/link';

const Projetos = ({ projetos }) => (
  <div>
    <ul>
      {projetos.map(projeto => (
        <li key={projeto.id}>{projeto.name}</li>
      ))}
    </ul>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>
);

Projetos.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/users/c4pote/repos'
  );
  return { projetos: response.data };
}

export default Projetos;
