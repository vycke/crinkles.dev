import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import { Link } from 'gatsby';
import camelCase from '../utils/camelCase';
import { formatReadingTime } from '../utils/readingTime';
import logoDark from '../img/logo-dark.svg';
import logoLight from '../img/logo-light.svg';
import { AppContext } from '../components/Context';

const BlogPost = ({ data, pageContext }) => {
  const { theme } = React.useContext(AppContext);
  const { markdownRemark: post } = data;
  let next, prev;

  if (pageContext.next)
    next = {
      link: pageContext.next.fields.slug,
      title: pageContext.next.frontmatter.title
    };

  if (pageContext.prev)
    prev = {
      link: pageContext.prev.fields.slug,
      title: pageContext.prev.frontmatter.title
    };

  const meta = {
    ...post.frontmatter,
    words: post.wordCount.words,
    url: `https://www.kevtiq.dev${data.markdownRemark.fields.slug}`
  };

  const twt = `${meta.title} by @kevtiq ${meta.url}`;

  return (
    <Layout meta={{ ...post.frontmatter, slug: post.fields.slug }}>
      <main className="content post stack-medium">
        <header className="grid sm post__header" role="contentinfo">
          <h1 className="cell--middle">{meta.title}</h1>
          <span className="cell--middle post__meta">
            <time dateTime={meta.date}>{meta.date}</time>
            {` • ${formatReadingTime(meta.words)} • `}
            <a href={`https://twitter.com/intent/tweet?text=${twt}`}>
              share on twitter
            </a>
          </span>
          {meta.tags && meta.tags.length > 0 && (
            <ul className="cell--middle tags">
              {(meta.tags || []).slice(0, 100).map((t, i) => (
                <li key={i}>
                  <Link key={i} to={`/tags/${camelCase(t)}`}>
                    {t.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </header>

        <article
          className="grid sm post__body stack-small"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer className="grid sm post__footer">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Kevtiq logo used by Kevin Pennekamp"
            className="cell--middle logo__img"
          />
        </footer>
      </main>

      <Pagination prev={prev} next={next} />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
