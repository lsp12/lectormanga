import {
  FileUpload, Flag, Grade, MenuBook,
} from '@mui/icons-material';
import {
  Box, Button, Card, CardContent, Chip, Grid, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { isMobile } from 'react-device-detect';
import img1 from '../../../asset/img/img1.jpg';

const MangaTopContent = () => {
  const theme = useTheme();
  const matchSmDown = useMediaQuery( theme.breakpoints.down( 'sm' ));
  const matchMdDown = useMediaQuery( theme.breakpoints.down( 'md' ));
  const betweenDown = useMediaQuery( theme.breakpoints.down( 1000 ));
  const betweenUp = useMediaQuery( theme.breakpoints.up( 900 ));
  return (
    <Card sx={{
      position: 'relative',
      borderRadius: isMobile ? 0 : 'auto',
    }}
    >
      <Box
        position="absolute"
        bgcolor="rgb(0, 0, 0, 0.4)"
        width="100%"
        height="100%"
        overflow="hidden"
        sx={{ borderTopLeftRadius: isMobile ? 0 : 15, borderTopRightRadius: isMobile ? 0 : 15 }}
        zIndex={1}
      />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        overflow="hidden"
        sx={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundImage: `url(${img1})`,
          filter: 'blur(4px)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
        }}
      />
      <CardContent sx={{ zIndex: 3, position: 'relative' }}>
        <Grid container spacing={matchSmDown ? 0 : 2} sx={{ mt: 0, ml: 0 }} display="flex" justifyContent="center">
          <Grid item xs={6} md={3} lg={2} display="flex" justifyContent="center">
            <img
              style={{
                width: matchMdDown ? '183px' : '100%',
                borderRadius: 10,
                boxShadow: '0px 0px 30px -21px rgba(0,0,0,0.69)',
                WebkitBoxShadow: '0px 0px 30px -21px rgba(0,0,0,0.69)',
                maxHeight: betweenDown && betweenUp ? '270px' : 'auto',
              }}
              src={img1}
              alt="img1"
            />
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            <Typography variant={matchSmDown ? 'h6' : 'h3'} color="white" fontWeight="bold">
              A Cute Girl with a Nasty Look
            </Typography>
            <Typography variant={matchSmDown ? 'body2' : 'h5'} color="white">
              Scary Girl, Cute Girl
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap" mt={2}>
              <Chip sx={{ backgroundColor: '#fefefe' }} label="Slice of Life" />
              <Chip sx={{ backgroundColor: '#fefefe' }} label="Sci-Fy" />
              <Chip sx={{ backgroundColor: '#fefefe' }} label="Drama" />
              <Chip sx={{ backgroundColor: '#fefefe' }} label="Horror" />
              <Chip sx={{ backgroundColor: '#fefefe' }} label="Comedy" />
              <Chip sx={{ backgroundColor: '#fefefe' }} label="RomCom" />
              <Chip sx={{ backgroundColor: '#fefefe' }} label="Isekai" />
              <Chip sx={{ backgroundColor: '#fefefe' }} label="Sci-Fy" />
            </Box>
            <Box display="flex" gap={1} flexWrap="wrap" mt={2} mb="auto">
              <Button variant="contained" color="primary">
                Add To Library
              </Button>
              <Button variant="contained" color="inherit">
                <Grade />
              </Button>
              <Button variant="contained" color="inherit">
                <MenuBook />
              </Button>
              <Button variant="contained" color="inherit">
                <Flag />
              </Button>
              <Button variant="contained" color="inherit">
                <FileUpload />
              </Button>
            </Box>
            <Typography variant="h6" color="white" mt={4}>
              Hamita
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MangaTopContent;
