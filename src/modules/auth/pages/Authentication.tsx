import { Box } from '@mui/material';
import { useEffect } from 'react';
import FormsContainer from '../components/FormsContainer';

interface IAuthenticationProps{
  title: string;
}

const Authentication = ({ title }:IAuthenticationProps ) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh' }}
    >
      <FormsContainer />
    </Box>
  );
};

export default Authentication;
