import React from "react";

function Marquee(props) {
  const message = props.match.params.text;
  console.log('message',message);
  return (   
    <marquee>{message}</marquee>
  );
}

export default Marquee;
