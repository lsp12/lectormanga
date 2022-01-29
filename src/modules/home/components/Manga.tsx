import { Box, Typography, useTheme } from '@mui/material';
import img1 from '../../../asset/img/img1.jpg';
import { StyledBadge } from '../../shared/components/badge/StyledBadge';

const Manga = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      cursor: 'pointer', userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none',
    }}
    >
      <Box>
        <StyledBadge badgeContent={4} color="primary">
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
        </StyledBadge>
      </Box>
      <Typography
        variant="body2"
        fontWeight="bold"
        className="titleBreaker"
      >
        A Cute Girl with a Nasty Look A Cute Girl with a Nasty Look
      </Typography>
      <Box display="flex" alignItems="center">
        <div style={{
          backgroundColor: theme.palette.primary.main,
          width: 10,
          height: 10,
          borderRadius: '50%',
        }}
        />
        <Typography
          variant="body2"
          ml={1}
        >
          Episode 1
        </Typography>
      </Box>
    </Box>
  );
};

export default Manga;
