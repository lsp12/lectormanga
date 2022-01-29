import {
  CssBaseline, ThemeProvider,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from './modules/shared/theme';
import AppRouter from './router/AppRouter';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRouter />
    <ToastContainer position="top-right" />
  </ThemeProvider>
);

export default App;
