const myCountry = {
  country: "VietNam",
  capital: "HaNoi",
  language: "Vietnamese",
  population: "100",
  neighbours: ["china", "cam", "Lao"],
  describe : function(){
    console.log(
        `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
      );
  },

  checkIsland: function(){
    return this.neighbours.length === 0;
  }
};

myCountry.describe();

console.log(myCountry.checkIsland());

myCountry.population += 2000000;
myCountry["population"] -= 2000000;

//lab 18.4 

for (let i = 0; i < 50; i++) {
   console.log(`Voter number ${i + 1} is currently voting.`);
}

//lab 18.5
const wordPopulation = 7900000000;
const populations = [1441000000, 100000000, 66000000, 32000000];
console.log(populations);
const percentageOfWorld3 = (population) => `${(population / wordPopulation * 100).toFixed(1)} %`; // arrow func
const percentages = [];
populations.forEach(element => {
    percentages.push(percentageOfWorld3(element));
});

console.log(percentages);

//lab18.6
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
  if(listOfNeighbours[i].length >1){
    listOfNeighbours[i].forEach(element => {
      console.log(element);
    });
  }  
}

//lab18.7
let count = 0;
while (populations[count] == undefined){
  percentages.push(percentageOfWorld3(populations[count]));
  count++;
}

console.log(percentages);

//lab 18.8
const Mark = {
  fullName: "Mark Miller",
  mass : 78,
  height : 1.69,
  calcBMI : function () {
      return this.mass / (this.height * this.height)
  } 
}

const John = {
  fullName: "John Smith",
  mass : 92,
  height : 1.95,
  calcBMI : function () {
      return this.mass / (this.height * this.height)
  } 
}

if(Mark.calcBMI() == John.calcBMI()){
  console.log(`They have the same BMI ${Mark.calcBMI()}`)
}
if(Mark.calcBMI() > John.calcBMI()){
  console.log(`${Mark.fullName} ${Mark.calcBMI()} higher than ${John.calcBMI()}`);
} else {
  console.log(`${John.fullName} ${John.calcBMI()} higher than ${Mark.calcBMI()}`);
}

//18.2
const calcTip = bill => bill <= 300 && bill>= 50 ? bill * 0.15 : bill * 0.2;
const totals = [];
function calcTotals(bills) {
  for (let i = 0; i < bills.length; i++) {
      totals.push(calcTip(bills[i]) + bills[i]);
  }
  console.log(totals);
}
calcTotals([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]);

//bonus
function calcAverage(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  sum = sum / arr.length;
  console.log(sum);
}

calcAverage(totals);