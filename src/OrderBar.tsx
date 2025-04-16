import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Divider,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function OrderBar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#eaeaea",
        padding: "8px 16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 0 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Order String */}
      <Box display="flex" flexDirection="column">
        <Typography variant="caption" fontWeight={600}>
          Order string
        </Typography>
        <Box display="flex" gap={1} mt={0.5}>
          <Typography variant="body2">82276</Typography>
          <Typography variant="body2"> | MB</Typography>
          <Typography variant="body2"> | BIKPS</Typography>
          <Typography variant="body2"> | LN</Typography>
        </Box>
      </Box>

      {/* Divider */}
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      {/* Qty Counter */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="caption" fontWeight={600}>
          Qty
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          border="1px solid #ccc"
          borderRadius="4px"
          mt={0.5}
        >
          <IconButton size="small" sx={{ borderRight: "1px solid #ccc" }}>
            <Remove fontSize="small" />
          </IconButton>
          <TextField
            value="1"
            size="small"
            variant="standard"
            inputProps={{ style: { textAlign: "center", width: "30px" } }}
            InputProps={{ disableUnderline: true }}
          />
          <IconButton size="small" sx={{ borderLeft: "1px solid #ccc" }}>
            <Add fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Divider */}
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      {/* Total Price */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="caption" fontWeight={600}>
          Total Price
        </Typography>
        <Typography variant="body2" fontWeight={600} mt={0.5}>
          $ 0
        </Typography>
      </Box>

      {/* Validate Button */}
      <Button
        variant="contained"
        disabled
        sx={{ ml: 2, backgroundColor: "#d9d9d9", color: "#555" }}
      >
        Validate
      </Button>
    </Box>
  );
}
