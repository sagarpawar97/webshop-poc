import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import DisplayCard from './DisplayCard'; // Ensure correct path to DisplayCard

const GridViewComponent = ({ items, selectedItem, handleCardClick }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <DisplayCard
              header={item.label}
              handleCardClick={() => handleCardClick(item)}
              selected={selectedItem === item.label}
              required={item.required}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridViewComponent;
