import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CardGenres from '../components/CardGenres';
import CardRecomended from '../components/CardRecomended';
import CardSearch from '../components/CardSearch';
import CardTop from '../components/CardTop';
import CardUserSelecction from '../components/CardUserSelecction';

interface IProfileProps{
  title: string;
}

const Home = ({ title }: IProfileProps ) => {
  const theme = useTheme();
  const matchEqualMd = useMediaQuery( theme.breakpoints.between( 'md', 'lg' ));
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Grid container spacing={matchEqualMd ? 5 : 10}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <CardTop />
            </Grid>
            <Grid item xs={12}>
              <CardUserSelecction />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <CardSearch />
            </Grid>
            <Grid item xs={12}>
              <CardGenres />
            </Grid>
            <Grid item xs={12}>
              <CardRecomended />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
};

export default Home;
