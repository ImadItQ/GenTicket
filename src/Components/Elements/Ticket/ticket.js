import React, { useState, useEffect } from "react";
import "./styles.css";

function ticket(props) {
  const [ticketval, setTicketval] = useState("0");
  const [tickArray, setTickArr] = useState([]);
  useEffect(() => {
    setTicketval(props.val);
    setTickArr(tickArray.length < 5 && tickArray.push(tickArray));
  });
  return (
    <div className="ticket-card">
      <p className="ticket-val">{ticketval}</p>
    </div>
  );
}

export default ticket;
