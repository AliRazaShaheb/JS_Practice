export function keyboardKeysValue(e, display) {
  e.preventDefault();
  if (e.key === "1") {
    display.innerHTML("1");
  }
  if (e.key === "2") {
    display.innerHTML("2");
  }
  if (e.key === "3") {
    display.innerHTML("3");
  }
  if (e.key === "4") {
    display.innerHTML("4");
  }
  if (e.key === "5") {
    display.innerHTML("5");
  }
  if (e.key === "6") {
    display.innerHTML("6");
  }
  if (e.key === "7") {
    display.innerHTML("7");
  }
  if (e.key === "8") {
    display.innerHTML("8");
  }
  if (e.key === "9") {
    display.innerHTML("9");
  }
  if (e.key === "0") {
    display.innerHTML("0");
  }

  //operators
  if (e.key === "+") {
    display.innerHTML("+");
  }
  if (e.key === "-") {
    display.innerHTML("-");
  }
  if (e.key === "*") {
    display.innerHTML("*");
  }
  if (e.key === "/") {
    display.innerHTML("/");
  }
  if (e.key === "%") {
    display.innerHTML("%");
  }

  if (e.key === "Backspace") {
    let result = display.elem.innerText;
    let newResult = result.substring(0, result.length - 1);
    display.elem.innerText = newResult;
  }

  // enter
  if (e.key === "Enter") {
    display.calc(display.elem.innerText);
  }
}
