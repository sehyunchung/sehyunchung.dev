/** @jsx jsx */
import { FC, HtmlHTMLAttributes } from 'react'
import { Link } from 'gatsby'
import { css, jsx } from '@emotion/react'

import Bio from './bio'

const Header: FC<HtmlHTMLAttributes<HTMLHeadElement> & { title?: string }> = ({
  title,
  ...props
}) => {
  return (
    <header
      css={css`
        padding: 1.2em 1.4em 1em;
        background-color: var(--color-bg);
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        gap: calc(8 * var(--px));
        z-index: 99;
        height: calc(30 * var(--px));
        justify-content: space-between;
        box-shadow: 0px -10px 20px 0px rgba(67, 81, 176, 0.4);

        h1 {
          display: inline-flex;
          color: var(--color-quote-bg);
          font-weight: bold;
          font-family: sans-serif;
          padding: 0;

          a {
            display: inline-flex;
          }
        }
      `}
      {...props}
    >
      <h1>
        <Link
          css={css`
            color: inherit;
            background-color: none;
            /* border: 1px dashed var(--cool-blue); */
            /* border-radius: 99%; */
            /* padding: 0.3em 0.3em 0.2em; */

            :hover {
              text-decoration: none !important;
            }
          `}
          to={`/`}
        >
          <span aria-describedby="Thinking Face Emoji">{'🤔'}</span>
        </Link>
      </h1>
      <Bio />
    </header>
  )
}

export default Header
