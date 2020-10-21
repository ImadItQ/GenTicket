import React, { useState, useEffect } from "react";
import "./styles.css";
function holder(props) {
  return (
    <div className="inner-label" onClick={() => props.onClick()}>
      <i
        class="far fa-plus-square fa-lg"
        style={{ color: "black", paddingRight: "10px" }}
      ></i>
      Add Ticket
    </div>
  );
}

export default holder;
