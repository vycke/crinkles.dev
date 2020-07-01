import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import Card from '../components/Card';
import { graphql } from 'gatsby';
import { formatReadingTime } from '../utils/readingTime';

const PostOverviewTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);
  const meta = data.site.siteMetadata;

  return (
    <Layout meta={meta}>
      <main className="content stack-large grid">
        <h1 className="title cell--middle">
          <span role="img" aria-label="waving hand">
            👋
          </span>{' '}
          <span>
            Hey, I'm Kevin. I'm a Dutch software engineer. I love CSS, front-end
            architecture, engineering and writing about it!
          </span>
        </h1>
        <section className="cell--middle tiles" role="feed">
          {posts.map((p, i) => {
            const post = p.node;
            return (
              <Card
                key={i}
                title={post.frontmatter.title}
                url={post.fields.slug}
                subtitle={post.frontmatter.description}
                category={p.node.frontmatter.category}
                meta={`${post.frontmatter.date} • ${formatReadingTime(
                  post.wordCount.words
                )}`}
              />
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default PostOverviewTemplate;

export const postOverviewPageQuery = graphql`
  query BlogPage {
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
    allMarkdownRemark(
      limit: 1000
      skip: 0
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
            category
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
