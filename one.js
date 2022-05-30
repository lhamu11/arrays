let myColor = ["Red", "Green", "White", "Black"];
let simple = myColor.toString();
console.log(simple);

let gold = String("Red+Green+White+Black");
console.log(gold);

let strings = ["avengers", "captain america", "ironman", "black panther"];
const upper = [];
strings.forEach(element => {
  upper.push(element.toUpperCase());
});
console.log(upper);

const heroes = [
    {name: "Spider-Man"},
    {name: "Thor"},
    {name:"Black Panther"},
    {name: "Captain Marvel"},
    {name: "Silver Surfer"}
];
let ten = [];
for(var i=0; i<heroes.length; i++) {
    ten.push(heroes[i]); ten[i].id=i;
};
heroes.forEach(function(o) {
  o.hero = o.name;
  delete o.name;
});
console.log(ten);

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const choose = inputWords.slice(3);
console.log(choose);
