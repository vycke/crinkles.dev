import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import PageSwitcher from '../components/PageSwitcher';
import { graphql } from 'gatsby';
import TagList from '../components/TagList';
import EntryCard from '../components/EntryCard';

const TagsTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);
  const { tag, tags, prev, next } = pageContext;

  return (
    <Layout
      meta={{
        title: `kevtiq.dev | ${tag}`,
        description: `All posts on kevtiq.dev with the tag: ${tag}`
      }}>
      <section className="overview overview--list" role="feed">
        <h1 className="overview__title">{tag}</h1>

        {posts.map((p, i) => {
          const post = p.node;
          return <EntryCard key={i} post={post} showTags={false} />;
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
