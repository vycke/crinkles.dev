import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import { graphql } from 'gatsby';
import Card from '../components/Card';
import { formatReadingTime } from '../utils/readingTime';
import { Link } from 'gatsby';
import camelCase from '../utils/camelCase';

const TagsTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);
  const { tag, tags } = pageContext;

  return (
    <Layout
      meta={{
        title: `kevtiq.dev | ${tag}`,
        description: `All posts on kevtiq.dev with the tag: ${tag}`
      }}>
      <main className="grid content sm">
        <div className="stack-medium cell--middle">
          <h1 className="title">{tag}</h1>

          <ul className=" tags">
            {(tags.filter((t) => t !== tag) || []).slice(0, 100).map((t, i) => (
              <li key={i}>
                <Link key={i} to={`/tags/${camelCase(t)}`}>
                  {t.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
          <section className="grow" role="feed">
            {posts.map((p, i) => {
              const post = p.node;
              return (
                <Card
                  key={i}
                  title={post.frontmatter.title}
                  url={post.fields.slug}
                  subtitle={post.frontmatter.description}
                  image={post.frontmatter.featuredImage}
                  tags={post.frontmatter.tags}
                  orientation="vertical"
                  meta={`${post.frontmatter.date} • ${formatReadingTime(
                    post.wordCount.words
                  )}`}
                />
              );
            })}
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default TagsTemplate;

export const postOverviewPageQuery = graphql`
  query TagPage($tag: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          wordCount {
            words
          }
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
