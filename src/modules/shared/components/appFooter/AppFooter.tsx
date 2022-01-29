import { Box, Container } from '@mui/material';

const AppFooter = () => (
  <Box sx={{
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    backgroundColor: 'white',
    pt: 5,
    pb: 5,
  }}
  >
    <Container maxWidth="xl">
      <Box textAlign="center">
        <Box>
          Maded with
          {' '}
          <span style={{ color: 'red' }}>♥</span>
          {' '}
          by a
          {' '}
          <strong>Weird Team</strong>
          .
        </Box>
      </Box>
    </Container>
  </Box>
);

export default AppFooter;
