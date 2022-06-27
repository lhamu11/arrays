let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join('+'));

let strings = ["avengers", "captain america", "ironman", "black panther"];
const upper = [];
strings.forEach(element => {
  upper.push(element.toUpperCase());
});
console.log(upper);


const heros = [
    {name: "Spider-Man"},
    {name: "Thor"},
    {name:"Black Panther"},
    {name: "Captain Marvel"},
    {name: "Silver Surfer"}
];
const arr = heros.map((hero, index) => {
  return {id:index, hero: hero.name}
});
console.log(arr);
               

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const choose = inputWords.slice(3);
console.log(choose);
