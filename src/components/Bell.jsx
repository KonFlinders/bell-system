import { useEffect } from "react";
import useSound from "use-sound";
import dingDong from "../assets/ding-dong.opus";
import distantFoghorn from "../assets/distant_foghorn.opus";

function Bell (props) {
  const countDown=props.countDown;
  const [bell] = useSound(distantFoghorn);

  // Plays the bell when the countDown reaches zero
  useEffect(() => {
    if (countDown === "00:00") {
      bell();
    }
  },[countDown])

  return (
      <>
      </>
  )
}

export default Bell;