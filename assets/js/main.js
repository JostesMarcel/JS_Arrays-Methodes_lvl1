// --------1.1 arrays--------------
let adresse = ["Ahornstr", 45892, "Gelsenkirchen", "NRW"]
console.log(adresse);
let besteFreunde = ["Noel", "Axel", "Basti"]
console.log(besteFreunde);
let person = ["Marcel", "Jostes", "Shmell", "29", "Fussball spielen, Pc spielen, Freunde treffen", "Essen", "SuperCode"]
console.log(person);
person.push(adresse, besteFreunde)
console.log(person);
console.log(person + adresse + besteFreunde);
console.log("This is the array adresse inside person: " + person[7]);
console.log("This is the array besteFreunde inside person: " + person[8]);
// --------1.2 arrays-lenght--------------
console.log("This is the array lenght of person: " + person.length);
console.log("This is the array lenght of adresse: " + adresse.length);
console.log("This is the array lenght of besteFreunde: " + besteFreunde.length);
// --------1.2 arrays-3-möglichkeiten--------------
let meineTrainer1 = [
    "Eric",
    "Steffen",
    "Simon",
    "Ahmed"
]
console.log(meineTrainer1);

let meineTrainer2 = new Array(
    "Eric", 
    "Steffen", 
    "Simon", 
    "Ahmed"
)
console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";
console.log(meineTrainer3);
// --------1.3 arrays-index--------------
let numberArray = [
    5,
    6,
    7,
    8,
    9,
    10
]
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);
// --------1.4 arrays-split()--------------
let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."
let meinText2 = "Wie geht es dir heute?"
let meinText3 = "Heute ist ein großer Tag für uns."
let split1 = meinText1.split();
let split2 = meinText1.split("");
let split3 = meinText1.split(" ");
console.log(split1);
console.log(split2);
console.log(split3);
let split4 =meinText2.split();
let split5 =meinText2.split("");
let split6 =meinText2.split(" ");
console.log(split4);
console.log(split5);
console.log(split6);
let split7 =meinText3.split();
let split8 =meinText3.split("");
let split9 =meinText3.split(" ");
console.log(split7);
console.log(split8);
console.log(split9);
// --------1.5 arrays-push()--------------
let songs = ["Bohemian Rhapsody, Stairway to Heaven, Hotel California"]
songs.push("Numb", "Braking the Habbit", "One Step Closer")
let totalSongs = songs;
console.log(totalSongs);

let besteFussballerAllerZeiten = ["Ronaldo", "Messi", "Zidane", "Ronaldinho", "Pele"]
besteFussballerAllerZeiten.push("Neuer","Van der Saar","Chech")
console.log(besteFussballerAllerZeiten);
totalSongs.push("Jedes Schlagerlied", "Alle Schlagerlieder")
console.log(totalSongs);
besteFussballerAllerZeiten.push("Zidane", "Guardiola", "Klopp")
console.log(besteFussballerAllerZeiten);
// --------1.5.2 push() arrays in array--------------
let heroUndEnemy = [
    "Batman, The Joker",
    "Professor X, Magneto",
    "Thor, Loki"
]
heroUndEnemy.push("Punisher, Jigsaw", "Deadpool, T-Ray", "Shield, Hydra")
console.log(heroUndEnemy);
// --------1.6 Arrays-pop()--------------
let entferterSong = totalSongs.pop()
console.log(entferterSong);
console.log(totalSongs);
let entfernterFussballer = besteFussballerAllerZeiten.pop()
console.log(entfernterFussballer);
console.log(besteFussballerAllerZeiten);
besteFussballerAllerZeiten.pop()
besteFussballerAllerZeiten.pop()
besteFussballerAllerZeiten.pop()
console.log(besteFussballerAllerZeiten);
// --------1.7 Arrays-unshift()--------------
let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]
console.log(deutscheGerichte);
deutscheGerichte.unshift("Schnitzel", "Bratwurst", "Döner", "Königsbergerklopse", "Spätzle")
console.log(deutscheGerichte);
// --------1.8 Arrays-shift()--------------
let nichtGut = deutscheGerichte.shift()
console.log(nichtGut);
console.log(deutscheGerichte);
// --------1.9 Push Pop Shift Unshift Difference--------------
let num = [23, 54, 75];
console.log(num);
num.push(17, 40, 77, 85, 33)
console.log(num);
num.unshift(10, 12, 88, 99, 22)
console.log(num);
num.pop()
num.pop()
console.log(num);
num.shift()
num.shift()
console.log(num);
// --------1.10 Arrays delete with Splice()--------------
let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
console.log(array);
let delImg1 = array.splice(4, 4)
console.log(delImg1);
console.log(array);
let delImg2 = array.splice(6, 5)
console.log(delImg2);
console.log(array);
let delImg3 = array.splice(-9)
console.log(delImg3);
console.log(array);
// --------1.10 Arrays Splice()--------------
var array1 = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];
array1.splice(2, 0, "imageTeilnehmer008supercode.jpg","imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg")
console.log(array1);
array1.splice(5, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg")
console.log(array1);
array1.splice(2, 0, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg",)
console.log(array1);
array1.splice(11, 0, "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg", "imageTeilnehmer013supercode.jpg",)
console.log(array1);
// --------1.10 Arrays Slice()--------------
let array3 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
array3.slice()
let copyImg1 = array3.slice(7, 15)
console.log(copyImg1);
console.log(array3);
let copyImg2 = array3.slice(6, 12)
console.log(copyImg2);