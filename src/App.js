// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { ThemeToggleContext } from 'themes/context';
import LoadingScreen from 'components/LoadingScreen';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  return (
    <>
      <LoadingScreen />
      <ThemeToggleContext.Provider>
        <ThemeCustomization>
          <ScrollTop>
            <Routes />
          </ScrollTop>
        </ThemeCustomization>
      </ThemeToggleContext.Provider>
    </>
  );
};

export default App;
