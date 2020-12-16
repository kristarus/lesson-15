const data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

let lastName = prompt("Input Last Name");
let flag = false;

for (i = 0; i< data.length; i++) {
  if (lastName.toLowerCase() === data[i].lastName.toLowerCase()) {
    console.log(data[i]);
    flag = true;
    break;
  }
  if (i === data.length-1 && flag === false) {
    console.log("Last name is undefined");
  }
}