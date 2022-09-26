import { calcData } from "./data";
import { ElementGenerator } from "./element";
import { keyboardKeysValue } from "./keyboardInputs";
import { btnStyle, displayStyle, layoutStyle, rowStyle } from "./style";

//refremtn to document
const app = document.getElementById("app");

// elements
const calcLayout = new ElementGenerator("div", "", app);
const display = new ElementGenerator("div", "", calcLayout.elem);
calcData.map((each) => {
  const row = new ElementGenerator("div", "", calcLayout.elem);
  row.css(rowStyle);
  return each.map((btnText) => {
    const btn = new ElementGenerator("button", `${btnText}`, row.elem);
    btn.elem.onclick = function () {
      display.innerHTML(btn.elem.innerText);
    };
    if (btnText === "C") {
      btn.elem.onclick = function () {
        display.textReset();
      };
    }
    if (btnText === "=") {
      btn.elem.onclick = function () {
        display.calc(display.elem.innerText);
      };
    }
    btn.css(btnStyle);
    return btn;
  });
});
//
calcLayout.css(layoutStyle);
display.css(displayStyle);

document.addEventListener("keydown", (e) => keyboardKeysValue(e, display));
