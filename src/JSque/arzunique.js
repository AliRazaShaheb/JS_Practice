function arzunique(num) {
  const randomChar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz#@$";
  let randomString = "";

  function rand(length) {
    return Math.floor(Math.random() * length);
  }

  for (let i = 0; i < num; i++) {
    const randStr = randomChar[`${rand(randomChar.length)}`];
    randomString += randStr;
  }

  return randomString;
}

export default arzunique;

// usecase

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
