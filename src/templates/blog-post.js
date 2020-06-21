import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import { formatReadingTime } from '../utils/readingTime';

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post, site } = data;
  let next, prev;

  if (pageContext.next)
    next = {
      link: pageContext.next.fields.slug,
      title: pageContext.next.frontmatter.title,
    };

  if (pageContext.prev)
    prev = {
      link: pageContext.prev.fields.slug,
      title: pageContext.prev.frontmatter.title,
    };

  const meta = {
    ...post.frontmatter,
    words: post.wordCount.words,
    url: `https://www.kevtiq.dev${data.markdownRemark.fields.slug}`,
  };

  return (
    <Layout
      className="post"
      meta={{
        ...site.siteMetadata,
        ...post.frontmatter,
        slug: post.fields.slug,
      }}>
      <main className="content stack-medium">
        <header className="grid post__meta" role="contentinfo">
          <span>
            <time dateTime={meta.date}>{meta.date}</time>
            {` • ${formatReadingTime(meta.words)}`}
          </span>
          <h1>{meta.title}</h1>
        </header>

        <article
          className="grid sm post__body stack-small"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>

      <Pagination prev={prev} next={next} />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredImage
      }
    }
  }
`;
