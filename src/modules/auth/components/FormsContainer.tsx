import {
  Box, Card, CardContent, Grid, Hidden, Typography,
} from '@mui/material';
import LoginPhoto from '../../../asset/img/cover.jpeg';
import LoginForm from './LoginForm';

const FormsContainer = () => (
  <Card sx={{
    width: '90%',
    maxWidth: '700px',
  }}
  >
    <Grid container>
      <Hidden mdDown>
        <Grid item md={4}>
          <img src={LoginPhoto} alt="Login" style={{ width: '100%', height: '100%' }} />
        </Grid>
      </Hidden>
      <Grid item xs={12} md={8} sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%' }}>
          <Box display="flex" mt={3} mb={3}>
            <Typography variant="h5" fontWeight="bold">
              LECTOR MANGA
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              Bienvenidos de vuelta! Inicia seción para acceder a todo el contenido y funcionalidades.
            </Typography>
          </Box>
          <Box sx={{ bottom: 0 }}>
            <LoginForm />
          </Box>
        </CardContent>
      </Grid>
    </Grid>
  </Card>
);

export default FormsContainer;
