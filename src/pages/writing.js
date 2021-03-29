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
    <Layout meta={meta} className="page-width-5">
      <main className="center-layout pb-3 pt-1">
        <section className="tiles tiles-g-2 tiles-w-1" role="feed">
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

export const pageQuery = graphql`
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
