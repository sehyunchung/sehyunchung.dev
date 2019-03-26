import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Fira Sans',
    'Gothic A1',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Fira Sans', 'Gothic A1', 'sans-serif'],
  overrideStyles: ({ rhythm }) => ({
    p: {
      marginTop: rhythm(1)
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
