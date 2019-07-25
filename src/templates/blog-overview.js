import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import PostOverview from '../components/PostOverview';
import PageSwitcher from '../components/PageSwitcher';
import { graphql } from 'gatsby';

const PostOverviewTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);

  return (
    <Layout>
      <main className="overview" role="feed">
        <PostOverview posts={posts} tags={true} />
      </main>
      <PageSwitcher prev={pageContext.prev} next={pageContext.next} />
    </Layout>
  );
};

export default PostOverviewTemplate;

export const postOverviewPageQuery = graphql`
  query BlogPage($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          wordCount {
            words
          }
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
