import Typography from 'typography';
import sutro from 'typography-theme-sutro';

sutro.overrideThemeStyles = ({
  rhythm
}) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginBottom: rhythm(1),
    marginTop: rhythm(1),
    color: '#201f1f',
    fontWeight: 900
  }
});

const typography = new Typography(sutro);

export default typography;