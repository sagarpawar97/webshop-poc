import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowLeft";
import ArrowForwardIcon from "@mui/icons-material/ArrowRight";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  Stack,
  Grid
} from "@mui/material";
import "./index.css";
import CardComponent  from "./CardComponent";
import OrderBar from "./OrderBar";
import DisplayCard from "./DisplayCard";
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/ViewList';
import { GridView } from "@mui/icons-material";
import GridViewComponent from "./GridViewComponent"

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const requiredData = [
  { label: "Outside Escutcheon/Rose", value: "", type: "img" },
  { label: "Inside Finish", value: "", type: "img" },
  { label: "Hand/Bevel", value: "", type: "img" },
  { label: "Door size (Width)", value: "", type: "txt" },
  { label: "Door size (Thickness)", value: "", type: "txt" },
];

const optionalData = [
  { label: "Function", value: "", type: "img" },
  { label: "Keyway", value: "", type: "img" },
  { label: "Keygroup", value: "", type: "img" },
  { label: "Outside Lever/Knob", value: "", type: "txt" },
  { label: "Outside Finish", value: "", type: "img" },
  { label: "Strike", value: "", type: "img" },
  { label: "Lip Length - Strike", value: "", type: "txt" },
  { label: "Strike", value: "", type: "txt" },
  { label: "Stamping Instruction Code", value: "", type: "txt" },
  { label: "Die Stamp Code", value: "", type: "txt" },
  { label: "Stamp Dnd,Usgov,Usprop", value: "", type: "img" },
  { label: "Stamp Less Trademark", value: "", type: "img" },
  { label: "Options~Rail", value: "", type: "txt" },
  { label: "Number Of Keys", value: "", type: "txt" },
  { label: "Prefix Option - 1", value: "", type: "txt" },
  { label: "Prefix Option - 15", value: "", type: "txt" },
];

const gridViewData = [
  { label: "Outside Escutcheon/Rose", value: "", type: "img", required: true, segment: 1 },
  { label: "Inside Finish", value: "", type: "img", required: true, segment: 2 },
  { label: "Hand/Bevel", value: "", type: "img", required: true, segment: 3 },
  { label: "Door size (Width)", value: "", type: "txt", required: true, segment: 4 },
  { label: "Door size (Thickness)", value: "", type: "txt", required: true, segment: 5 },

  { label: "Function", value: "", type: "img", required: false, segment: 6 },
  { label: "Keyway", value: "", type: "img", required: false, segment: 7 },
  { label: "Keygroup", value: "", type: "img", required: false, segment: 8 },
  { label: "Outside Lever/Knob", value: "", type: "txt", required: false, segment: 9 },
  { label: "Outside Finish", value: "", type: "img", required: false, segment: 10 },
  { label: "Strike", value: "", type: "img", required: false, segment: 11 },
  { label: "Lip Length - Strike", value: "", type: "txt", required: false, segment: 12 },
  { label: "Strike", value: "", type: "txt", required: false, segment: 13 },
  { label: "Stamping Instruction Code", value: "", type: "txt", required: false, segment: 14 },
  { label: "Die Stamp Code", value: "", type: "txt", required: false, segment: 15 },
  { label: "Stamp Dnd,Usgov,Usprop", value: "", type: "img", required: true, segment: 16 },
  { label: "Stamp Less Trademark", value: "", type: "img", required: false, segment: 17 },
  { label: "Options~Rail", value: "", type: "txt", required: false, segment: 18 },
  { label: "Number Of Keys", value: "", type: "txt", required: true, segment: 19 },
  { label: "Prefix Option - 1", value: "", type: "txt", required: false, segment: 20 },
  { label: "Prefix Option - 15", value: "", type: "txt", required: false, segment: 21 }
];


const data = [
  {
    type: "media",
    img: "https://assets.assaabloyamericas.com/is/image/assaabloyinc/AADSS1190733?fmt=png-alpha&bfc=on",
  },
  {
    type: "media",
    img: "https://assets.assaabloyamericas.com/is/image/assaabloyinc/AADSS1190733?fmt=png-alpha&bfc=on",
  },
  {
    type: "media",
    img: "https://assets.assaabloyamericas.com/is/image/assaabloyinc/AADSS1190733?fmt=png-alpha&bfc=on",
  },
  {
    type: "media",
    img: "https://assets.assaabloyamericas.com/is/image/assaabloyinc/AADSS1190733?fmt=png-alpha&bfc=on",
  },
  {
    type: "media",
    img: "https://assets.assaabloyamericas.com/is/image/assaabloyinc/AADSS1190733?fmt=png-alpha&bfc=on",
  },
  {
    type: "media",
    img: "https://assets.assaabloyamericas.com/is/image/assaabloyinc/AADSS1190733?fmt=png-alpha&bfc=on",
  },
  {
    type: "media",
    img: "https://assets.assaabloyamericas.com/is/image/assaabloyinc/AADSS1190733?fmt=png-alpha&bfc=on",
  },
];
const data1 = [
  {
    type: "text",
    text: "This is sample",
  },
  {
    type: "text",
    text: "This is sample1",
  },
  {
    type: "text",
    text: "This is sample2",
  },
  {
    type: "text",
    text: "This is sample3",
  },
  {
    type: "text",
    text: `1.875 - 1 7/8" Thick Door`,
  },
  {
    type: "text",
    text: `47 3/8" - 47 3/8" - Door Width`,
  },
  {
    type: "text",
    text: `48MM - 1 7/8" Thick Door`,
  },
  {
    type: "text",
    text: `1.9 - 1 7/8" Thick Door`,
  },
  {
    type: "text",
    text: "Another sample",
  },
  {
    tyoe: "text",
    text: `54MM - 2 1/8" Thick Door`,
  },
];

export default function BasicCard() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [drawerData, setDrawerData] = React.useState([]);
  const [view, setView] = React.useState("list");
  const [selectedTxt, setSelectedTxt] = React.useState("");

  
  const handleCardClick = (item) => {
    setSelectedItem(item?.label);
    if (item?.type === "img") {
      setDrawerData(data);
    } else {
      setDrawerData(data1);
    }
    setIsDrawerOpen(true);
  };
  
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  
  const handleChipSelection = (label) => {
    setSelectedTxt(label);
  };
  
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      setIsDrawerOpen(false);
      setSelectedTxt("");
      setDrawerData([]);
    };
    
  return (
    <div
      className={`grid-container ${isDrawerOpen ? "with-drawer" : "no-drawer"}`}
    >
      <div className="item1">
        <img
          src="https://assets.assaabloyamericas.com/is/image/assaabloyinc/AADSS1190733?fmt=png-alpha&bfc=on"
          width="100%"
          height="100%"
        />
      </div>

      <div className="item2">
      <Box sx={{ paddingBottom: 0 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box padding={1}>
          <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold', color:"#0a5184", mb: 1 }}>
            Classroom Deadlock
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            Configure how your classroom handles potential deadlock situations.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <IconButton
            color={view === "grid" ? "primary" : "default"}
            onClick={() => setView("grid")}
              >
                <GridViewIcon />
              </IconButton>
              <IconButton
                color={view === "list" ? "primary" : "default"}
                onClick={() => setView("list")}
              >
                <ListIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        {view === 'list' ? <Grid>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6">Required Configurations</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                maxHeight: 300,
                overflowY: "auto", // enables scroll if content exceeds maxHeight
              }}
            >
              <div className="cardWrapper">
                {requiredData?.map((item) => (
                  <DisplayCard
                    header={item.label}
                    handleCardClick={() => handleCardClick(item)}
                    selected={selectedItem === item.label}
                    isDrawerOpen={isDrawerOpen}
                  />
                ))}
                {/* <DisplayCard
                header="Function"
                handleCardClick={() => handleCardClick("Function")}
                selected={selectedItem === "Function"}
              />
              <DisplayCard
                header="Reader"
                selected={selectedItem === "Reader"}
                handleCardClick={() => handleCardClick("Reader")}
              />
              <DisplayCard
                header="Credentials"
                handleCardClick={() => handleCardClick("Credentials")}
                selected={selectedItem === "Credentials"}
              /> */}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6">Optional Configurations</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                maxHeight: 300,
                overflowY: "auto", // enables scroll if content exceeds maxHeight
              }}
            >
              <div className="cardWrapper">
                {optionalData?.map((item) => (
                  <DisplayCard
                    header={item.label}
                    handleCardClick={() => handleCardClick(item)}
                    selected={selectedItem === item.label}
                    isDrawerOpen={isDrawerOpen}
                  />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid> : <GridViewComponent
          items={gridViewData}
          handleCardClick={handleCardClick}
          selectedItem={selectedItem}
          isDrawerOpen={isDrawerOpen}
        />}
        <div style={{ position: "absolute", top: "55%", right: "-1px" }}>
          <IconButton
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-2px", // pull it out a bit from the card
              transform: "translateY(-50%)",
              backgroundColor: "#e0e0e0",
              borderRadius: "50%",
              width: 36,
              height: 36,
              boxShadow: 1,
              zIndex: 1000,
              "&:hover": {
                backgroundColor: "#cfcfcf",
              },
            }}
          >
            {isDrawerOpen ? <ArrowForwardIcon /> : <ArrowBackIcon />}
          </IconButton>
        </div>
      </div>
      {isDrawerOpen && (
        <Drawer
          variant="persistent"
          anchor="right"
          open={isDrawerOpen}
          PaperProps={{
            sx: {
              width: 480,
              padding: 2,
              height: '80vh',
              overflow: "auto",
              zIndex: 0,
            },
          }}
        >
          <div className="drawer-content">
            {" "}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Search values"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap"     
              }}
            >
              {drawerData?.map((item) => (
                <CardComponent img={item?.img} text={item?.text}  handleChipSelection={handleChipSelection}
                selectedTxt={selectedTxt} />
              ))}
            </div>
          </div>
        </Drawer>
      )}

      <div className="item4">
        {" "}
        <OrderBar />
      </div>
    </div>
  );
}
