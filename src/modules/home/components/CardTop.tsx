import {
  Grid, useMediaQuery, useTheme,
} from '@mui/material';
import CustomCard from '../../shared/components/card/CustomCard';
import Manga from './Manga';

const CardTop = () => {
  const theme = useTheme();
  const matchDown = useMediaQuery( theme.breakpoints.down( 1369 ));
  return (
    <CustomCard title="Most Read" subTitle="Most read at last week">
      <Grid container spacing={matchDown ? 2 : 3} display="flex">
        <Grid item xs={4} sm={3} md={2}>
          <Manga />
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Manga />
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Manga />
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Manga />
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Manga />
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Manga />
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default CardTop;
