import { Box } from '../../../node_modules/@mui/material/index';

const SkillCard = ({ children }) => {
  return (
    <Box
      sx={{
        background: '#1e1e1e',
        borderRadius: '5px;',
        height: { xs: '80px', sm: '120px' },
        boxShadow: '3px 3px 12px 0px rgba(0,0,0,0.75)'
      }}
    >
      <Box sx={{ marginLeft: 'auto', marginRight: 'auto', width: { xs: '80px', sm: '100px' }, paddingTop: { xs: '4px', sm: '16px' } }}>
        {children}
      </Box>
    </Box>
  );
};

export default SkillCard;
