let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join('+'));


let strings = ["avengers", "captain america", "ironman", "black panther"];
console.log(strings.map(string => string.toUpperCase()));


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

or ||
  
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const longWords = inputWords.filter(word => word.length > 6);
console.log(longWords);
