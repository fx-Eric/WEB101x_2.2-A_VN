//lab17.1
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}'.`
}

const VietNam = describeCountry("VIETNAM", 100, "HANOI");
console.log(VietNam)
const Japan = describeCountry("JAPAN", 60, "TOKYO");
console.log(Japan)
const England = describeCountry("ENGLAND", 45, "PARIS");
console.log(England)

//lab17.2
const wordPopulation = 7900000000;
function percentageOfWorld1 (population){ // khai bao ham
    return `${(population / wordPopulation * 100).toFixed(1)} %`;
}
const CHINA = percentageOfWorld1(1441000000);
console.log(CHINA) 
///....///

/// lab17.3
const percentageOfWorld2 = function (population) { // ham bieu thuc
    return`${(population / wordPopulation * 100).toFixed(1)} %`
}; 

const percentageOfWorld3 = (population) => `${(population / wordPopulation * 100).toFixed(1)} %`; // arrow func

//lab17.4 
const describePopulation = (country, population) => `${country} has ${population/1000000} million people, which is about ${percentageOfWorld3(population)} of the world.`;

const VN = describePopulation("VIETNAM", 100000000);
console.log(VN)

//lab17.5
const populations = [1441000000, 100000000, 66000000, 32000000];
console.log(populations);

const percentages = [];
populations.forEach(element => {
    percentages.push(percentageOfWorld3(element));
});

console.log(percentages);

//lab17.6
const neighbours = ['CHINA', 'CAM', 'LAO'];
neighbours.push('Utopia');
neighbours.pop();
if(neighbours.includes("Germany")){
    console.log('Probably not a central European country :D');
}

for (let i = 0; i < neighbours.length; i++) {
    if(neighbours[i] == "CAM"){
        neighbours[i] = "CAMPUCHIA"
    }
}
console.log(neighbours);

/// 17.7.1
///data 1 
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

// ///data 2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// ///data 3
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy");
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the trophy");
} else if(scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy")
} else {
    console.log("No one wins the trophy");
}


/// 17.7.2

const bill = 430 
const tip = bill <= 300 && bill>= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill : ${bill}$, tip : ${tip}$, total : ${bill + tip}$`)