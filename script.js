"use strict";

const firstName = "Bryson";
const age = 21;
const birthday = "October 2 2001";
const pineappplePizza = true;
const lifeEvents = [
  "I was born in south carolina",
  "I went college in port huron",
  "i got to climb mountains in colorado ",
  "i enjoy solving rubics cubes",
];

if (pineappplePizza === true) {
  console.log(`My name is ${firstName} and I like pineapples on pizza. I am currently 
  ${age} years old and my birthday is on ${birthday} `);
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(`${i} ... ${lifeEvents[i]} `);
}

let counter = 0;

while (true) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber !== 5) {
    console.log(`random number is not 5 it is ... ${randomNumber}`);
  } else {
    console.log(
      `${randomNumber} === 5. it took iterations to generate this number ${counter}`
    );
    break;
  }
  counter++;
}

console.log(`---------THIS SECTION IS FOR THE WAGE PORTION----------`);

const wage = 10;
const hours = Number(prompt(`How many hours did you work this week?`));
const total = Number(hours * wage);

if (hours > 40) {
  const overtime = (hours - 40) * (wage * 1.5);
  const complete = 400 + overtime;
  const milly = Math.floor(1000000 / complete);
  console.log(`You worked ${hours} Hours and you made...$ ${complete}`);
  console.log(`it would take you ${milly} weeks to become a millionaire`);
} else {
  const total = wage * hours;
  console.log(`You got no over time but you worked ${hours}
  and made $ ${total}`);
}

// heating and cooling

const actualTemp = 30;
const desiredTemp = 50;

if (actualTemp < desiredTemp) {
  console.log(`Run heat!`);
} else if (actualTemp > desiredTemp) {
  console.log(`Run A/C`);
} else {
  console.log(`Stand By`);
}

// extended challenge: Heating and cooling

const choice = prompt("F,C, or K?");
const temp = 50;
switch (choice) {
  case "F":
    console.log(`The temp is ${temp}`);
    break;
  case "C":
    const temp2 = Math.ceil((temp - 32) * 0.5);
    console.log(temp2);
    break;
  case "K":
    const temp3 = Math.ceil((temp - 32) * 0.55 + 273.15);
    console.log(temp3);
    break;
}

// extended challenge: Longest Name

const name3 = "Bryson";
const name2 = "Dan";
const name1 = "James";

let longestName = "";

if (name1.length > name2.length && name1.length > name3.length) {
  longestName = name1;
} else if (name2.length > name1.length && name2.length > name3.length) {
  longestName = name2;
} else {
  longestName = name3;
}

console.log(longestName);
