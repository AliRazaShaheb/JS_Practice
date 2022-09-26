// element generator
// function ElementGenerator(tag, innerHTML, parentElem) {
//   const app = document.getElementById("app");
//   const elem = document.createElement(tag);
//   elem.innerHTML = innerHTML;
//   parentElem ? parentElem.appendChild(elem) : app.appendChild(elem);
//   return elem;
// }

class ElementGenerator {
  constructor(tag = "", innerHTML = "", parentElem = "") {
    this.innterHTML = innerHTML;
    const app = document.getElementById("app");
    const elem = document.createElement(tag);
    parentElem ? parentElem.appendChild(elem) : app.appendChild(elem);
    this.elem = elem;
    elem.innerHTML = this.innterHTML;
  }
  innerHTML(inner) {
    this.elem.innerHTML += inner || this.innterHTML;
  }
  textReset() {
    this.elem.innerHTML = "";
  }
  calc(value) {
    this.elem.innerHTML = eval(value);
  }
  element(tag) {
    document.createElement(tag);
  }
  css(style) {
    for (let property in style) {
      this.elem.style[property] = style[property];
    }
  }
  print() {
    console.log(this.elem);
  }
}

export { ElementGenerator };
