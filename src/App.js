// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { ThemeToggleContext } from 'themes/context';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  return (
    <>
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
