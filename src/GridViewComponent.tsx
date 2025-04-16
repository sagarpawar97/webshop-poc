import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import DisplayCard from './DisplayCard'; // Ensure correct path to DisplayCard

const GridViewComponent = ({ items, selectedItem, handleCardClick }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Box
            key={index} 
          >
            <DisplayCard
              header={item.label}
              handleCardClick={() => handleCardClick(item)}
              selected={selectedItem === item.label}
              required={item.required}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default GridViewComponent;
