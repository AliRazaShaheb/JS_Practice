import "./styles.css";
import arzunique from "./JSque/arzunique";
console.clear();

const app = document.querySelector("#app");
const button = document.createElement("button");
const h2 = document.createElement("h2");

const handleRandomText = () => {
  h2.innerText = arzunique(20);
};

button.innerText = "Generate Unique Number";
button.onclick = handleRandomText;
button.style.cursor = "pointer";

// dom structure
app.appendChild(button);
app.appendChild(h2);
