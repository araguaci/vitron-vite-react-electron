import { useMemo } from 'react';
import Example from './pages/example/Example';
import { useStore } from './store/useStore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter, Routes, Route } from "react-router-dom";
import Zustand from './pages/example/Zustand';
import Info from './pages/example/Info';

const App = () => {
  const darkMode = useStore((state) => state.ui.darkMode);

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiButton: {
            defaultProps: {
              variant: 'contained',
              size: 'small',
            },
          },
          MuiChip: {
            defaultProps: {
              variant: 'outlined',
              sx: {
                m: 0.3
              }
            },
            
          },
        },
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Example />} />        
          <Route path="/Zustand" element={<Zustand />} />        
          <Route path="/Info" element={<Info />} />        
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;