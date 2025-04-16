import React from "react";
import "./DisplayCard.css";
import { Badge, IconButton } from "@mui/material";

const DisplayCard = (props: any) => {
  const { header, selected, handleCardClick, required, isDrawerOpen } = props;

  function notificationsLabel() {
    if(required === undefined) {
      return
    }

    return required  ? "R" : "O";
  }

  return (
  
      //<Badge badgeContent={notificationsLabel()} color={ required ?  "error" : "primary"}>
        <div
          className={`cardItm ${selected ? "active" : ""}`}
          onClick={handleCardClick}
          style={{ width:  isDrawerOpen ? "250px" : "300px"}}
        >
          {/* Top-right half circle badge
          {required !== undefined && <div className={`corner-badge ${required ? "required" : "optional"}`}>

          </div>} */}
          <span style={{ fontSize: "14px", textAlign: "center" }}>
            {`Choose `} <b>{header}</b> {required !== undefined && required && <span style={{ color: "red", fontSize:'24px' }}>*</span>}
          </span>
          <span style={{ fontSize: "12px" }}>
            Value: <b>None</b>
          </span>
        </div>
    //  </Badge>


  );
};

export default DisplayCard;
