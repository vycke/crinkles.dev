import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const meta = data.site.siteMetadata;

  return (
    <Layout meta={meta}>
      <main className="place-center flow">
        <h1>Page not found</h1>
        <h2>
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
