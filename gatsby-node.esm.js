import get from './src/utils/get';

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

function createPostPage(createPage, posts) {
  posts.forEach(({ node }, i) => {
    const id = node.id;

    const prev = i === 0 ? null : posts[i - 1].node;
    const next = i === posts.length - 1 ? null : posts[i + 1].node;

    createPage({
      path: node.fields.slug,
      category: node.frontmatter.category,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        id,
        prev,
        next,
      },
    });
  });
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: {
          frontmatter: {
            draft: { eq: false }
            templateKey: { eq: "blog-post" }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              category
              date
              title
              description
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    createPostPage(createPage, get(result, 'data.allMarkdownRemark.edges', []));
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
