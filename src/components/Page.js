// material-ui
import { Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Page = ({ title: title, children }) => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.primary.page }}>
      <Box sx={{ p: 2, mb: -2.25, borderBottom: `1px solid ${theme.palette.divider}`, pb: 1 }}>
        <Typography variant="h2">{title}</Typography>
      </Box>
      <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ p: 2 }}>
        {children}
      </Grid>
    </Box>
  );
};

export default Page;
