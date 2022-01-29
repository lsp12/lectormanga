import { CircularProgress, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { setLoadingPreview } from '../../shared/slice/uiSlice';

const PreviewLoader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [progress, setProgress] = useState( 0 );
  const executator = () => {
    dispatch( setLoadingPreview( false ));
    navigate( '/home/preview/a-girl' );
    return 0;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(( prevProgress ) => ( prevProgress >= 100 ? executator() : prevProgress + 10 ));
    }, 150 );
    return () => {
      clearInterval( timer );
    };
  }, []);
  return (
    <Paper
      elevation={3}
      sx={{
        height: 50,
        width: 50,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 60,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
      }}
    >
      <CircularProgress variant="determinate" value={progress} />
    </Paper>
  );
};

export default PreviewLoader;
