import padZeros from "../functions/padZeros";

function Clock (props) {

  const seconds = props.date.getSeconds();
  const minutes = props.date.getMinutes();
  const hours = props.date.getHours();

  return (
    <>
      {padZeros(hours, 2)}:
      {padZeros(minutes, 2)}:
      {padZeros(seconds, 2)}
    </>
  )
}

export default Clock;