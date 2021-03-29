import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
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
    url: `https://www.crinkle.dev${data.markdownRemark.fields.slug}`,
  };

  return (
    <Layout
      meta={{
        ...site.siteMetadata,
        ...post.frontmatter,
        slug: post.fields.slug,
      }}>
      <main className="flow pb-3 pt-1">
        <header className="center-layout flow flow-g-none" role="contentinfo">
          <span className="text-gray-300 uppercase text-0">
            <time dateTime={meta.date}>{meta.date}</time>
            {` • ${formatReadingTime(meta.words)}`}
          </span>
          <h1>{meta.title}</h1>
        </header>

        <article
          className="center-layout flow flow-g-2 post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>

      <section className="pagination splitter splitter-w-1">
        {!next && prev && <div />}
        {next && (
          <Link className="next" to={next.link}>
            <span>← Next</span>
            <h3>{next.title}</h3>
          </Link>
        )}
        {prev && (
          <Link className="previous" to={prev.link}>
            <span>Previous →</span>
            <h3>{prev.title}</h3>
          </Link>
        )}
      </section>
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
        category
      }
    }
  }
`;
