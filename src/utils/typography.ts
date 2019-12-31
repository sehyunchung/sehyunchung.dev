import Typography from 'typography'
import 'typeface-spoqa-han-sans2'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Spoqa Han Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Spoqa Han Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen-Sans',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'sans-serif',
  ],
  overrideStyles: ({ rhythm }) => ({
    body: {
      overflow: 'hidden',
      backgroundColor: 'hsl(0, 0%, 96%)',
      wordBreak: 'keep-all',
    },
    a: { textDecoration: 'none' },
    'a:hover, a:active': { color: 'none' },
    p: {
      marginTop: rhythm(1),
    },
    'p>img': {
      marginLeft: `50%`,
      transform: `translateX(-50%)`,
    },
    'pre, code': {
      fontFamily: `Menlo, Monaco, Consolas, monospace`,
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
