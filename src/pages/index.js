import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import Card from '../components/Card';
import { graphql, Link } from 'gatsby';
import { formatReadingTime } from '../utils/readingTime';

const PostOverviewTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);
  const meta = data.site.siteMetadata;

  return (
    <Layout meta={meta}>
      <main className="content center-layout stack-large overview">
        <section className="tiles">
          <div className="stack">
            <h1 className="title">Hey, I'm Kevin.</h1>
            <span>
              Welcome to my playground! I'm a software engineer, UI architect,
              engineering manager and a big CSS lover.{' '}
              <Link className="next" to="/blog">
                Writing
              </Link>{' '}
              about engineering and code. Currently working at{' '}
              <a href="https://finaps.nl" alt="Website of Finaps B.V.">
                Finaps
              </a>
              .
            </span>
          </div>
          <aside />
        </section>

        <section className="stack">
          <div className="tiles" role="feed">
            {posts.map((p, i) => {
              const post = p.node;
              return (
                <Card
                  key={i}
                  title={post.frontmatter.title}
                  url={post.fields.slug}
                  subtitle={post.frontmatter.description}
                  // category={p.node.frontmatter.category}
                  meta={`${post.frontmatter.date} • ${formatReadingTime(
                    post.wordCount.words
                  )}`}
                />
              );
            })}
          </div>
          <aside className="pagination">
            <Link className="previous" to="/blog">
              <span>Blog →</span>
              <h3>View more articles</h3>
            </Link>
          </aside>
        </section>
      </main>
    </Layout>
  );
};

export default PostOverviewTemplate;

export const postOverviewPageQuery = graphql`
  query HomePage {
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
      limit: 3
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
