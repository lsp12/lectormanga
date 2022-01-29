import {
  Article, Ballot, CalendarToday, Groups, Interests, LocalLibrary, Store, TextSnippet, TrackChanges,
} from '@mui/icons-material';
import {
  Card, Box, Typography, Chip, Grid,
} from '@mui/material';
import { isMobile } from 'react-device-detect';

const MangaInfoContent = () => (
  <Card sx={{
    borderRadius: isMobile ? 0 : 'auto',
  }}
  >
    <Box p={3}>
      <Box display="flex" alignItems="center">
        <Article />
        <Typography variant="body2" fontWeight="bold" ml={1}>
          Sinopsis
        </Typography>
      </Box>
      <Typography variant="caption" mt={1}>
        This delinquent is stupid cute

        High schooler Tanaka-kun believes that scary girls are actually cute. Thus, sitting next to the delinquent Mizuno-san he strives to get closer to her. However, in addition to having a scary expression, she the subject of many rumors and feared by her classmates!!

        Although getting the cold shoulder at first, Tanaka feverish offensive opens Mizuno heart up bit by bit. But Tanaka plan to help her fit in with their classmates during the school festival is threatened when disaster strikes!

        (Translation of the Volume 1 synopsis on Amazon by KasketBox)

        A twitter short by @hamita1220
      </Typography>
    </Box>
    <Box p={3} pt={0}>
      <Box display="flex" alignItems="center">
        <CalendarToday />
        <Typography variant="body2" fontWeight="bold" ml={1}>
          Release Year
        </Typography>
      </Box>
      <Typography variant="caption" mt={1} component="p">
        2021
      </Typography>
    </Box>
    <Box p={3} pt={0}>
      <Box display="flex" alignItems="center">
        <TextSnippet />
        <Typography variant="body2" fontWeight="bold" ml={1}>
          Alternative Titles
        </Typography>
      </Box>
      <Typography variant="caption" mt={1} component="p">
        目つき悪い子かわいい子
      </Typography>
      <Typography variant="caption" mt={1} component="p">
        Scary Girl, Cute Girl
      </Typography>
      <Typography variant="caption" mt={1} component="p">
        Metsuki Warui Ko Kawaii Ko
        A Cute Girl with Nasty Look
      </Typography>
    </Box>
    <Box p={3} pt={0}>
      <Box display="flex" alignItems="center">
        <Groups />
        <Typography variant="body2" fontWeight="bold" ml={1}>
          Authors / Artists
        </Typography>
      </Box>
      <Box display="flex" gap={2} mt={1}>
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
      </Box>
    </Box>
    <Box p={3} pt={0}>
      <Box display="flex" alignItems="center">
        <Interests />
        <Typography variant="body2" fontWeight="bold" ml={1}>
          Genres
        </Typography>
      </Box>
      <Box display="flex" gap={2} mt={1} flexWrap="wrap">
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Hamita" />
      </Box>
    </Box>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box p={3} pt={0}>
          <Box display="flex" alignItems="center">
            <Ballot />
            <Typography variant="body2" fontWeight="bold" ml={1}>
              Themes
            </Typography>
          </Box>
          <Box display="flex" gap={2} mt={1}>
            <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Delinquents" />
            <Chip sx={{ backgroundColor: '#E7E6E6' }} label="School Life" />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={3} pt={0}>
          <Box display="flex" alignItems="center">
            <LocalLibrary />
            <Typography variant="body2" fontWeight="bold" ml={1}>
              Format
            </Typography>
          </Box>
          <Box display="flex" gap={2} mt={1}>
            <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Web Comic" />
          </Box>
        </Box>
      </Grid>
    </Grid>
    <Box p={3} pt={0}>
      <Box display="flex" alignItems="center">
        <TrackChanges />
        <Typography variant="body2" fontWeight="bold" ml={1}>
          Track
        </Typography>
      </Box>
      <Box display="flex" gap={2} mt={1}>
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="MangaUodates" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="AniList" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="MyAnimeList" />
      </Box>
    </Box>
    <Box p={3} pt={0}>
      <Box display="flex" alignItems="center">
        <Store />
        <Typography variant="body2" fontWeight="bold" ml={1}>
          Read or Buy
        </Typography>
      </Box>
      <Box display="flex" gap={2} mt={1}>
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Oficial Raw" />
        <Chip sx={{ backgroundColor: '#E7E6E6' }} label="Amazon" />
      </Box>
    </Box>
  </Card>
);

export default MangaInfoContent;
