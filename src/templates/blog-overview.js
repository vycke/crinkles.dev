import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import Card from '../components/Card';
import PageSwitcher from '../components/PageSwitcher';
import { graphql } from 'gatsby';
import { formatReadingTime } from '../utils/readingTime';
import { NUM_HIGHLIGHT } from '../config';

const PostOverviewTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);

  const highlights = posts.slice(0, NUM_HIGHLIGHT);

  return (
    <Layout className="page page--wide">
      <h1 className="overview__title">
        A blog about front-end engineering and architecture, and everything else
        that pops up in my mind.
      </h1>
      {highlights.map((p, i) => (
        <Card
          key={i}
          className={`highlight ${i % 2 !== 0 ? 'reverse' : ''}`}
          title={p.node.frontmatter.title}
          url={p.node.fields.slug}
          subtitle={p.node.frontmatter.description}
          image={p.node.frontmatter.featuredImage}
          orientation="h"
          meta={`${p.node.frontmatter.date} • ${formatReadingTime(
            p.node.wordCount.words
          )}`}
        />
      ))}
      <section className="overview overview--grid" role="feed">
        {posts.slice(NUM_HIGHLIGHT).map((p, i) => {
          const post = p.node;
          return (
            <Card
              key={i}
              title={post.frontmatter.title}
              url={post.fields.slug}
              subtitle={post.frontmatter.description}
              image={post.frontmatter.featuredImage}
              orientation="v"
              meta={`${post.frontmatter.date} • ${formatReadingTime(
                post.wordCount.words
              )}`}
            />
          );
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
      filter: {
        frontmatter: { draft: { eq: false }, templateKey: { eq: "blog-post" } }
      }
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
            featuredImage
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
