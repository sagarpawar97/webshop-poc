import { Card, CardContent, CardMedia, Typography } from "@mui/material";

 const CardComponent = (props:any) => {
    let { img, text } = props;
  return (
    <div>
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
          <Typography variant="body2" color="text.secondary">
            {text ? text : "This is a sample"} .
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
