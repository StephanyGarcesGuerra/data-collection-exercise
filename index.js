console.log("===== Part 1: Previous Example =====");
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let csvArr = csv.split("\n");
console.log(csv);


console.log("===== Part 2: Expanding Functionality =====");
let index = 0;
while (index < csvArr.length) {
  csvArr[index] = csvArr[index].split(",");
  index++;
}

let columns = csvArr[0].length;
console.log(columns);
console.log(csvArr);

console.log("===== Part 3: Transoforming Data =====");

let one = {
  id: 42,
  name: 'Bruce',
  occupation: 'Knight',
  age: 41,
}
let two = {
  id: 57,
  name: 'Bob',
  occupation: 'Fry Cook',
  age: 19,
}
let three = {
  id: 63,
  name: 'Blaine',
  occupation: 'Quiz Master',
  age: 58,
}
let four = {
  id: 98,
  name: 'Bill',
  occupation: "Doctor's Assistant",
  age: 26,
}

let users = [one, two, three, four]
console.log(users);


console.log("-----Part 4-----");
users.pop()
console.log(users);

let five = {
  id: 48,
  name: 'Barry',
  occupation: 'Runner',
  age: 25,
}
users.splice(1, 0, five)

let six = {
  id: 7,
  name: 'Bilbo',
  occupation: 'None',
  age: 111,
}

users.push(six)

let aveAge = 0;
users.forEach(item => {
    aveAge += item.age / 5;
});
console.log(`The average age is ${aveAge}`);


console.log("-----Part 5-----");

