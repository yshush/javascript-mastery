const x = 0;
const y = 0;
const coordinate = { x, y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name: name,
    age: age,
  };
}

function makeObj(name, age) {
  return { name, age };
}
