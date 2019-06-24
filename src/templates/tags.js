import React from 'react';
import TemplateWrapper from '../components/PageWrapper';
import get from '../utils/get';
import PostOverview from '../components/PostOverview';
import PageSwitcher from '../components/PageSwitcher';
import { graphql } from 'gatsby';
import TagList from '../components/TagList';

const TagsTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);
  const { tag, tags, prev, next } = pageContext;

  return (
    <TemplateWrapper
      meta={{
        title: `Kevtiq.co | ${tag}`,
        description: `All posts on Kevtiq.co with the tag: ${tag}`
      }}>
      <h1 className="overview__title">{`Selected tag: ${tag.toLowerCase()}`}</h1>
      <TagList tags={tags.filter((t) => t !== tag)} className="tags--page" />
      <main className="overview" role="feed">
        <PostOverview posts={posts} />
      </main>
      <PageSwitcher prev={prev} next={next} />
    </TemplateWrapper>
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
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 350)
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
