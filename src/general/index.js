const name = "ali";

function displayName() {
  console.log(this.name);
}

const person = {
  name: "arz",
  method: displayName.bind(this)
};

person.method(); // TypeError

//if strict mode its undefined
