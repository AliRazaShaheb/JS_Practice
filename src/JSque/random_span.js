const rand = Math.trunc(Math.random() * 255);

const spanCond = (input) => {
  if (input !== "full") {
    return `1/-1 (plz input full)`;
  }

  if (input <= -1 || input === "full") {
    return `1 / -1`;
  }
  return `span ${input} / span ${input}`;
};
console.log(spanCond(-100));
console.log(spanCond(2));
console.log(spanCond("full"));
console.log(spanCond("fullmoon"));
