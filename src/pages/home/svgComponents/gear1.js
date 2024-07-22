// material-ui
import { useTheme } from '@mui/material/styles';
import './glow.css';
import '../Animation.css';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// import logo from 'assets/images/logo/ay-software-7.svg';

// ==============================|| LOGO SVG ||============================== //

const Gear1 = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg className="rotate-1" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="14.5" stroke={theme.palette.primary.main} strokeWidth="7" />
        <rect y="18" width="10" height="9" rx="2" fill={theme.palette.primary.main} />
        <path
          d="M34 20C34 18.8954 34.8954 18 36 18H42C43.1046 18 44 18.8954 44 20V25C44 26.1046 43.1046 27 42 27H36C34.8954 27 34 26.1046 34 25V20Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M7.65685 5.12132C8.4379 4.34027 9.70423 4.34027 10.4853 5.12132L14.7279 9.36396C15.509 10.145 15.509 11.4113 14.7279 12.1924L11.1924 15.7279C10.4113 16.509 9.14501 16.509 8.36396 15.7279L4.12132 11.4853C3.34027 10.7042 3.34027 9.4379 4.12132 8.65685L7.65685 5.12132Z"
          fill={theme.palette.primary.main}
        />
        <rect
          width="10"
          height="9"
          rx="2"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 34.0711 4)"
          fill={theme.palette.primary.main}
        />
        <path
          d="M8.65685 39.3137C9.4379 40.0948 10.7042 40.0948 11.4853 39.3137L15.7279 35.0711C16.509 34.29 16.509 33.0237 15.7279 32.2427L12.1924 28.7071C11.4113 27.9261 10.145 27.9261 9.36396 28.7071L5.12132 32.9498C4.34027 33.7308 4.34027 34.9972 5.12132 35.7782L8.65685 39.3137Z"
          fill={theme.palette.primary.main}
        />
        <rect
          x="34.0711"
          y="40.4351"
          width="10"
          height="9"
          rx="2"
          transform="rotate(-135 34.0711 40.4351)"
          fill={theme.palette.primary.main}
        />
        <rect x="17" y="10" width="10" height="9" rx="2" transform="rotate(-90 17 10)" fill={theme.palette.primary.main} />
        <rect x="18" y="44" width="10" height="9" rx="2" transform="rotate(-90 18 44)" fill={theme.palette.primary.main} />
      </svg>
    </>
  );
};

export default Gear1;
