import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Crinkle from '../components/Crinkle';

const MetaPage = ({ data, pageContext }) => {
  const meta = data.site.siteMetadata;

  return (
    <Layout meta={meta} className="text-00">
      <main className="wrapper flow pb-3">
        <h1 className="flow-b-000">Meta</h1>
        <blockquote>
          "A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It
          highlights personality and uniqueness."
        </blockquote>

        <p>
          <Crinkle /> Welcome to my playground! As a Front-end Engineer I love
          tinkering around. If you regularly visit, you will see many small
          things change. I am always trying new things to improve this website.
          I also take extra care to ensure this is <i>my</i> website, by adding
          some personal favorite <i>crinkles</i>. Some of my favorite that
          currently can be found on this website are:
        </p>
        <ul>
          <li>
            A vibrant color-scheme on top of a dark-mode only website applied in
            different ways.
          </li>
          <li>
            Carefully selected typography around readability of text and code
            examples.
          </li>
          <li>
            Small personal touches throughout the website, in line with{' '}
            <Crinkle />.
          </li>
          <li>
            Boxes to highlight extra information in my writing for those
            interested.
          </li>
          <li>
            A <Link to="/writing/fluid-interfaces-using-css/">fluid</Link>{' '}
            experience across screen sizes, which you will only notice if you
            actively resize your screen.
          </li>
          <li>
            Modern <Link to="/writing/css-layout-patterns/">CSS patterns</Link>{' '}
            to enhance the responsiveness of the website.
          </li>
        </ul>
        <p>
          The current version of this website is created using{' '}
          <a href="https://www.gatsbyjs.com" title="Website of Gatsby">
            Gatsby
          </a>{' '}
          and my own{' '}
          <a href="https://www.gatsbyjs.com" title="Github link for LAB CSS">
            (S)CSS framework
          </a>
          , based on{' '}
          <a href="https://cube.fyi" title="Website for the CUBE CSS framework">
            CUBE CSS
          </a>
          .
        </p>
      </main>
    </Layout>
  );
};

export default MetaPage;

export const pageQuery = graphql`
  query metaPage {
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
  }
`;
