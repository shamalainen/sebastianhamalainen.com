import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PortfolioTeaser from '../portfolioTeaser/portfolioTeaser';
import Listing from '../listing/listing';

const PortfolioListingLiftup = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "//content/portfolio//" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
              lead
              date(formatString: "MMMM DD, YYYY")
              teaser_image {
                childImageSharp {
                  fluid(quality: 100) {
                    src
                  }
                }
              }
            }
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Listing
        arrayOfContent={data.allMdx.edges}
        listingComponent={PortfolioTeaser}
        listingClass="listing--col-3"
      />
    </React.Fragment>
  );
};

export default PortfolioListingLiftup;
