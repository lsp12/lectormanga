import { Grid } from '@mui/material';
import React from 'react';
import { FormManga } from '../components/FormManga';

export const EntryManga = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <FormManga />
    </Grid>
  </Grid>
);
