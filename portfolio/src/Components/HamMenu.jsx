// import { useState } from "react";
export default function HamMenu() {
  // const [isClicked, setIsClicked] = useState(false);

  // document.getElementById("check").addEventListener("click", () => {
  //   setIsClicked(!isClicked);
  // });

  return (
    <div class="hamMenu">
      <label for="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}
