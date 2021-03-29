import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import Card from '../components/Card';
import { graphql, Link } from 'gatsby';
import { formatReadingTime } from '../utils/readingTime';
import Crinkle from '../components/Crinkle';

const PostOverviewTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);
  const meta = data.site.siteMetadata;

  return (
    <Layout meta={meta} className="wide-layout">
      <main className="wrapper flow flow-gap-3">
        <section className="splitter mt-1">
          <div className="flow flow-gap-000">
            <h1 className="title">Hi, I'm Kevin.</h1>
            <span>
              <Crinkle /> I'm a Software Engineer working at{' '}
              <a href="https://finaps.nl" title="Website of Finaps B.V.">
                Finaps
              </a>{' '}
              where I lead a small team. I am a big <i>front-end</i> and{' '}
              <i>CSS</i> lover, and occasionally{' '}
              <Link className="next" to="/writing">
                write
              </Link>{' '}
              about it.
            </span>
          </div>
          <aside />
        </section>

        <section className="grid" role="feed">
          {posts.map((p, i) => {
            const post = p.node;
            return (
              <Card
                key={i}
                title={post.frontmatter.title}
                url={post.fields.slug}
                subtitle={post.frontmatter.description}
                meta={`${post.frontmatter.date} • ${formatReadingTime(
                  post.wordCount.words
                )}`}
              />
            );
          })}
        </section>
        <aside className="pagination mt-1">
          <Link className="previous" to="/writing">
            <span>Blog →</span>
            <h3>View more articles</h3>
          </Link>
        </aside>
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
