import React from 'react';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <main className="grid content sm">
      <h1 className="title title--center cell--middle">Page not found</h1>
      <h2 className="subtitle subtitle--center subtitle--emoji cell--middle">
        <span role="img" aria-label="Sorry emoji" aria-labelledby="">
          🙈🙉🙊
        </span>
      </h2>
    </main>
  </Layout>
);
