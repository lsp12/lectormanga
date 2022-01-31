import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { FormGender } from '../components/Forms/FormGender';

interface IAuthenticationProps{
  title: string;
}

export const Genders = ({ title }:IAuthenticationProps ) => {
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
      <FormGender />
    </Box>
  );
};
