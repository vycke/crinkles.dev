import _ from './src/utils';

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const PAGE_SIZE = 6;

function createPaginatedPages(createPage, posts, pathName, context) {
  const numPages = Math.ceil(posts.length / PAGE_SIZE);
  const template = (context || {}).template;

  Array.from({ length: numPages }).forEach((_, i) => {
    let prev, next;

    if (i + 1 < numPages)
      prev = { title: 'Older posts', link: `${pathName}/${i + 2}` };

    if (i === 1) next = { title: 'Newer posts', link: `${pathName}/` };
    else if (i > 0) next = { title: 'Newer posts', link: `${pathName}/${i}` };

    createPage({
      path: i === 0 ? `${pathName}/` : `${pathName}/${i + 1}`,
      component: path.resolve(template || `src/templates/blog-overview.js`),
      context: {
        limit: PAGE_SIZE,
        skip: i * PAGE_SIZE,
        next,
        prev,
        currentPage: i + 1,
        ...context
      }
    });
  });
}

function createIndexPages(createPage, posts) {
  createPaginatedPages(createPage, posts, '');
}

function createTagPages(createPage, posts) {
  let tags = [];
  posts.forEach((edge) => {
    tags = tags.concat(_.get(edge, 'node.frontmatter.tags', []));
  });
  tags = _.uniq(tags);

  tags.forEach((tag) => {
    const tagPath = `/tags/${_.camelCase(tag)}`;
    const filtered = posts.filter((p) =>
      _.get(p, 'node.frontmatter.tags', []).includes(tag)
    );

    createPaginatedPages(createPage, filtered, tagPath, {
      template: 'src/templates/tags.js',
      tag,
      tags
    });
  });
}

function createPostPage(createPage, posts) {
  posts.forEach(({ node }, i) => {
    const id = node.id;
    const prev = i === 0 ? null : posts[i - 1].node;
    const next = i === posts.length - 1 ? null : posts[i + 1].node;

    createPage({
      path: node.fields.slug,
      tags: node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        id,
        prev,
        next
      }
    });
  });
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              date
              title
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

    const posts = result.data.allMarkdownRemark.edges;

    createPostPage(createPage, posts);
    createIndexPages(createPage, posts);
    createTagPages(createPage, posts);
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
      value
    });
  }
};
