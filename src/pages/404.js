import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const meta = data.site.siteMetadata;
  return (
    <Layout meta={meta}>
      <main className="grid content">
        <h1 className="title cell--middle">Page not found</h1>
        <h2 className="subtitle subtitle--emoji cell--middle">
          <span role="img" aria-label="Sorry emoji" aria-labelledby="">
            🙈🙉🙊
          </span>
        </h2>
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
        image
        twitterName
      }
    }
  }
`;
