import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

const CardComponent = (props) => {
  let { img, text } = props;
  return (
    <Box justifyContent={'normal'}>
     {img ? <Card
        sx={{
          width: 120,
          height: img ? 120 : 30,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {img && (
          <CardMedia
            component="img"
            image={img}
            alt="Sample"
            sx={{
              flex: "1 1 auto",
              maxHeight: 90,
              objectFit: "contain",
            }}
          />
        )}
        <CardContent
          sx={{
            flex: "0 1 auto",
            padding: 1,
            backgroundColor: "#F5F5F5",
          }}
        >
           
            <Typography variant="body2" color="text.secondary">
              {text ? text : "This is a sample"} .
            </Typography>
          
        </CardContent>
      </Card> : <Chip
          label={text || "Label"}
          sx={{
            fontWeight: 500,
            color: "#333",
            backgroundColor: "#e3f2fd",
            padding: "4px 8px",
            margin: "4px",
            maxWidth: "100%",
            whiteSpace: "normal",
            lineHeight: 1.2,
          }}
          variant="outlined"
        />
      }
    </Box>
  );
};

export default CardComponent;
