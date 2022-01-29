import { OpenInNew, Close } from '@mui/icons-material';
import {
  Box, Card, Container, Grid, IconButton, Slide, useMediaQuery, useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import img1 from '../../../asset/img/img1.jpg';
import { setResizing } from '../../shared/slice/uiSlice';

const PreviewView = () => {
  const theme = useTheme();
  const mathDownMd = useMediaQuery( theme.breakpoints.down( 'md' ));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState( true );
  const interval = () => {
    setTimeout(() => {
      setChecked( true );
      navigate( '/home' );
    }, 150 );
  };
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
      <Box
        position="fixed"
        bottom={51}
        right={0}
        width={mathDownMd ? '100%' : '50%'}
        height="50%"
        minHeight="50%"
      >
        <Card sx={{
          height: '100%',
          borderTopRightRadius: '0',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          borderTopLeftRadius: mathDownMd ? '0' : '15px',
          borderBottom: `5px solid ${theme.palette.primary.main}`,
          boxShadow: '0px 0px 14px -1px rgba(0,0,0,0.72)',
          WebkitBoxShadow: '0px 0px 14px -1px rgba(0,0,0,0.72)',
        }}
        >
          <Box position="fixed" zIndex={2}>
            <IconButton
              sx={{
                color: 'white',
              }}
              onClick={() => {
                dispatch( setResizing( false ));
                setChecked( false );
                interval();
              }}
            >
              <Close />
            </IconButton>
            <IconButton
              sx={{
                color: 'white',
              }}
              onClick={() => {
                dispatch( setResizing( true ));
                navigate( '/manga/a-girl' );
              }}
            >
              <OpenInNew sx={{ transform: 'rotate(270deg)!important' }} />
            </IconButton>
          </Box>
          <Box
            position="relative"
            height="40%"
          >
            <Box
              position="absolute"
              bgcolor="rgb(0, 0, 0, 0.4)"
              width="100%"
              height="100%"
              overflow="hidden"
              sx={{ borderTopLeftRadius: mathDownMd ? '0' : '15px' }}
              zIndex={1}
            />
            <Box
              position="absolute"
              width="100%"
              height="100%"
              overflow="hidden"
              sx={{
                backgroundImage: `url(${img1})`,
                filter: 'blur(4px)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 25%',
              }}
            />
          </Box>
          <Container maxWidth="lg">
            <Grid container spacing={2} sx={{ mt: -10, position: 'absolute', zIndex: 1 }}>
              <Grid item xs={3}>
                <img
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    boxShadow: '0px 0px 30px -21px rgba(0,0,0,0.69)',
                    WebkitBoxShadow: '0px 0px 30px -21px rgba(0,0,0,0.69)',
                  }}
                  src={img1}
                  alt="img1"
                />
              </Grid>
            </Grid>
          </Container>
        </Card>
      </Box>

    </Slide>
  );
};

export default PreviewView;
