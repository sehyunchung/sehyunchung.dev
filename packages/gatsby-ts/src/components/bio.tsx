import React, { ComponentProps, FC } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { styled } from '../stitches.config';

const Nav = styled('nav', {
  display: 'inline-flex',

  a: {
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
  },
});

export const Bio: FC<ComponentProps<typeof Nav>> = (props) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  const { social } = data.site.siteMetadata;

  return (
    <Nav {...props}>
      <Link to="/about">about</Link>
      <Link to="/til">til</Link>
      <a href={`https://github.com/${social.github}`}>github</a>
    </Nav>
  );
};

export default Bio;
