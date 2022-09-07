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
