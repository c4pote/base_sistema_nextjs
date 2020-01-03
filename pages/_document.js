import React, { Component } from 'react';

import Document, { Head, Main, NextScript } from 'next/document'
// import { Container } from './styles';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{`body { background: #dcdcdc }`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
