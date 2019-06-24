import { graphql, useStaticQuery } from 'gatsby';

const useSiteMeta = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMeta;
