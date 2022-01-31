import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { FromLenguaje } from '../components/Forms/FromLenguaje';

interface ILengaujeProps {
  title: string;
}

export const Lenguaje = ({ title }:ILengaujeProps ) => {
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
      <FromLenguaje />
    </Box>
  );
};
