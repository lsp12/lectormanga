import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { RegisterForm } from '../components/RegisterForm';

interface IAuthenticationProps{
  title: string;
}

export const Register = ({ title }:IAuthenticationProps ) => {
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
      <RegisterForm />
    </Box>
  );
};
