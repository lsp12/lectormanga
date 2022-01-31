import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { FormsCategory } from '../components/Forms/FormsCategory';

interface IAdminCategoryProps {
  title: string;
}

export const Category = ({ title }:IAdminCategoryProps ) => {
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
      <FormsCategory />
    </Box>
  );
};
