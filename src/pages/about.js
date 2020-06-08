import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const PostOverviewTemplate = ({ data }) => {
  const meta = data.site.siteMetadata;
  return (
    <Layout meta={meta}>
      <main className="content stack-large grid lg">
        <h1 className="title cell--middle">
          <span role="img" aria-label="waving hand">
            👋
          </span>{' '}
          <span>
            Hey, I'm Kevin. I write about anything that pops up in my mind (but
            mostly about front-end)
          </span>
        </h1>
      </main>
    </Layout>
  );
};

export default PostOverviewTemplate;

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
