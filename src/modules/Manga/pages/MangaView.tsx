import {
  Grid, useMediaQuery, useTheme,
} from '@mui/material';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setResizing } from '../../shared/slice/uiSlice';
import MangaInfoLgDown from '../components/MangaInfoLgDown';
import MangaInfoLgUp from '../components/MangaInfoLgUp';
import MangaTopContent from '../components/MangaTopContent';

interface IMangaViewProps{
  title: string;
}

const MangaView = ({ title }: IMangaViewProps ) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const matchLgUp = useMediaQuery( theme.breakpoints.up( 'lg' ));
  const { resizing } = useAppSelector(( state ) => state.ui );
  useEffect(() => {
    document.title = title;
    if ( resizing === true ) {
      const timer = setInterval(() => {
        dispatch( setResizing( false ));
      }, 400 );
      return () => {
        clearInterval( timer );
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, title]);
  return (
    <Grid container spacing={isMobile ? 0 : 2}>
      <Grid item xs={12}>
        <MangaTopContent />
      </Grid>
      <Grid item xs={12}>
        {matchLgUp ? <MangaInfoLgUp /> : <MangaInfoLgDown />}
      </Grid>
    </Grid>
  );
};

export default MangaView;
