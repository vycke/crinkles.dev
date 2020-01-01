import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import EntryCard from '../components/EntryCard';
import PageSwitcher from '../components/PageSwitcher';
import { graphql } from 'gatsby';
import PinnedPostsOverview from '../components/PinnedPosts';

const PostOverviewTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);

  return (
    <Layout>
      <section className="overview overview--grid" role="feed">
        <PinnedPostsOverview />
      </section>
      {pageContext.currentPage === 1 && (
        <h1 className="overview__title">Latest posts</h1>
      )}
      {pageContext.currentPage > 1 && (
        <h1 className="overview__title">{`Latest posts (page: ${pageContext.currentPage})`}</h1>
      )}
      <section className="overview overview--list" role="feed">
        {posts.map((p, i) => {
          const post = p.node;
          return <EntryCard key={i} post={post} />;
        })}
      </section>
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
      filter: { frontmatter: { draft: { eq: false } } }
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
