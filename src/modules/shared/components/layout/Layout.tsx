import {
  CircularProgress,
  Backdrop, Box, Container, useTheme, GlobalStyles,
} from '@mui/material';
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import PreviewLoader from '../../../home/components/PreviewLoader';
import LabelBottomNavigation from '../bottomNavigation/bottomNavigation';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: ILayoutProps ) => {
  const { loadingPreview, resizing } = useAppSelector(( state ) => state.ui );
  const theme = useTheme();
  const location = useLocation();
  return (
    <>
      <GlobalStyles
        styles={{
          '*::-webkit-scrollbar': {
            width: '0.4em',
          },
          '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      />
      <Box component="main" p={location.pathname.includes( '/manga/' ) && isMobile ? 0 : 4} mb={7}>
        <Container maxWidth="xl" sx={{ padding: isMobile ? 0 : 'auto' }}>{children}</Container>
        {loadingPreview && <PreviewLoader />}
        <Backdrop
          sx={{ backgroundColor: '#F1F5F9', color: theme.palette.primary.main, zIndex: ( themeBackDrop ) => themeBackDrop.zIndex.drawer + 1 }}
          open={resizing}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <LabelBottomNavigation />
      </Box>
    </>
  );
};

export default Layout;
