import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

const CardComponent = (props) => {
  let {  img,
    text,
    selectedTxt,
    handleChipSelection } = props;
  return (
    <div className="drawer-cardContainer" style={{ cursor: "pointer" }}>
    {img ? (
      <Card
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
          {img ? (
            <Typography variant="body2" color="text.secondary">
              {text ? text : "This is a sample"} .
            </Typography>
          ) : (
            <Chip label={text} variant="outlined" />
          )}
        </CardContent>
      </Card>
    ) : (
      <Chip
        label={text}
        variant="outlined"
        onClick={() => handleChipSelection(text)}
        sx={{
          backgroundColor: selectedTxt === text ? "#00A0D0" : "#e0e0e0",
          color: selectedTxt === text ? "#fff" : "#000",
          fontWeight: 500,
          // "&:hover": {
          //   backgroundColor: selectedTxt === text ? "#1565c0" : "#d5d5d5",
          // },
        }}
      />
    )}
  </div>
  );
};

export default CardComponent;
