import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const React = () => {
  const theme = useTheme();

  const imagePath = require(`assets/images/icons/react.png`);

  return (
    <Grid item xs={2} sx={{ position: 'absolute', mt: 1, ml: 1 }}>
      <img style={{ width: '50px', borderRadius: '4px', boxShadow: theme.customShadows.z1 }} src={imagePath} alt="react-icon"></img>
    </Grid>
  );
};

export default React;
