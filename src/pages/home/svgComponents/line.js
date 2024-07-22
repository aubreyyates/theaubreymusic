// material-ui
import { useTheme } from '@mui/material/styles';
import './glow.css';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// import logo from 'assets/images/logo/ay-software-7.svg';

// ==============================|| LOGO SVG ||============================== //

const Line = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg width="36" height="400" viewBox="0 0 36 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 218V400" stroke="#303841" strokeWidth="2" />
        <path d="M18 0V182" stroke="#303841" strokeWidth="2" />
        <circle cx="18" cy="200" r="17" fill={theme.palette.primary.main} className="glow-6" stroke="#303841" strokeWidth="2" />
      </svg>
    </>
  );
};

export default Line;
