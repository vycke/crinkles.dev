import React from 'react';
import get from '../utils/get';
import { StaticQuery, graphql } from 'gatsby';
import EntryCard from './EntryCard';

const PinnedPostsOverview = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allMarkdownRemark(
            limit: 3
            filter: {
              frontmatter: { pinned: { eq: true }, draft: { eq: false } }
            }
            sort: { fields: [frontmatter___date], order: DESC }
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
                  tags
                  featuredImage
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const posts = get(data, 'allMarkdownRemark.edges', []);

        return posts.map((p, i) => {
          const post = p.node;
          return (
            <EntryCard key={i} post={post} showImage={true} showTags={true} />
          );
        });
      }}></StaticQuery>
  );
};

export default PinnedPostsOverview;
