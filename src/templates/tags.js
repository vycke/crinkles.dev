import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import PageSwitcher from '../components/PageSwitcher';
import { graphql } from 'gatsby';
import TagList from '../components/TagList';
import Card from '../components/Card';
import { formatReadingTime } from '../utils/readingTime';

const TagsTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);
  const { tag, tags, prev, next } = pageContext;

  return (
    <Layout
      meta={{
        title: `kevtiq.dev | ${tag}`,
        description: `All posts on kevtiq.dev with the tag: ${tag}`
      }}>
      <h1 className="overview__title">{tag}</h1>
      <section className="overview overview--list" role="feed">
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
              orientation="h"
              meta={`${post.frontmatter.date} • ${formatReadingTime(
                post.wordCount.words
              )}`}
            />
          );
        })}
      </section>
      <PageSwitcher prev={prev} next={next} />

      <TagList
        tags={tags.filter((t) => t !== tag)}
        className="tags tags--page"
      />
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
