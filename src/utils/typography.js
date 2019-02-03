import Typography from 'typography';
import sutro from 'typography-theme-sutro';

sutro.overrideThemeStyles = ({
  adjustFontSizeTo,
  rhythm
}) => ({
  'h1,h2,h3,h4,h5,h6': {
    ...adjustFontSizeTo(rhythm(1)),
    marginBottom: rhythm(1),
    marginTop: rhythm(1)
  }
});

const typography = new Typography(sutro);

export default typography;