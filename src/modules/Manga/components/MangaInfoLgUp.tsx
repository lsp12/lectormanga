import { Grid } from '@mui/material';
import MangaInfoContent from './MangaInfoContent';

const MangaInfoLgUp = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} lg={6}>
      <MangaInfoContent />
    </Grid>
    <Grid item xs={12} lg={6}>
      <MangaInfoContent />
    </Grid>
  </Grid>
);

export default MangaInfoLgUp;
