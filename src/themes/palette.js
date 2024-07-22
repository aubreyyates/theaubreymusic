// material-ui
import { createTheme } from '@mui/material/styles';

// third-party
import { presetPalettes } from '@ant-design/colors';

// project import
import ThemeOption from './theme';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => {
  const colors = presetPalettes;

  const greyPrimary = [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#262626',
    '#141414',
    '#000000'
  ];
  const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
  const greyConstant = ['#fafafb', '#e6ebf1'];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  let paletteColor;
  paletteColor = ThemeOption(colors);

  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            common: {
              black: '#000',
              white: '#fff'
            },
            ...paletteColor,
            text: {
              primary: paletteColor.grey[700],
              secondary: paletteColor.grey[500],
              disabled: paletteColor.grey[400]
            },
            action: {
              disabled: paletteColor.grey[300]
            },
            divider: paletteColor.grey[200],
            background: {
              paper: paletteColor.grey[0],
              default: paletteColor.grey.A50
            }
          }
        : {
            common: {
              black: '#000',
              white: '#fff'
            },
            ...paletteColor,
            text: {
              primary: '#fff',
              secondary: '#fff',
              disabled: paletteColor.grey[400]
            },
            action: {
              disabled: paletteColor.grey[300]
            },
            divider: '#000',
            background: {
              paper: paletteColor.darkBlue[900],
              default: '#000',
              gradient: 'linear-gradient(360deg, rgba(0,0,0,1) 0%, rgb(25 34 51) 100%);'
            }
          })
    }
  });
};

export default Palette;
