import Typography from 'typography'

const typography = new Typography({
  bodyGray: 16,
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Verdana',
//    'Fira Sans',
    'Gothic A1',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'serif',
  ],
  bodyFontFamily: [
    'Verdana',
    'Fira Sans',
    'Gothic A1',
    'Helvetica',
    'Arial',
    'sans-serif',
    'serif',
  ],
  overrideStyles: ({ rhythm }) => ({
    body: {
      overflow: 'hidden',
    },
    p: {
      marginTop: rhythm(1),
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
