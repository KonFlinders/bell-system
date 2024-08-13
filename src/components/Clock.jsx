import React from 'react';
import padZeros from "../functions/padZeros";

function Clock (props) {
  return (
    <>
      {padZeros(props.date.getHours(), 2)}:
      {padZeros(props.date.getMinutes(), 2)}:
      {padZeros(props.date.getSeconds(), 2)}
    </>
  )
}

export default Clock;