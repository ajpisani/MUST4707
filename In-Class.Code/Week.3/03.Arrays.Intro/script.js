// Introduction to Arrays

let stuff = 23;

if (true) {
  const thing = "things";
}

console.log(stuff);

//stuff = 24; //you can  change things with "let" but not with "const"

const middleC = 60;

let waveFile = [0, 0.01, 0.02, -0.24];

//arrays have square brackets

let songInfo = ["myFile.wav", 2, true, stuff, middleC, [2, 3, 4]];
console.log(waveFile);
console.log(songInfo);

console.log(songInfo.length);
console.log(songInfo[4]);
songInfo[4] = 23;
console.log(songInfo[4]);

songInfo[6] = 23; //adds property or whatever to the array
//songInfo[songInfo.length] = 23; could copy and past this and it will keep properties or whatever theyre called to the end of the array

let myVar = songInfo.pop();
console.log(songInfo.pop());

songInfo.push("adds shit");
songInfo.pop();
songInfo.shift();
console.log(songInfo);

//.shift() - moves an element from its postition to a lower one
//.unshift() moves everything in the other direction.. or shid onto the front idk yet must f with it s'more
//you can push & shift multiple data points

//bro aint showin us the this yet

let chord = [60, 64, 67];

chord.push(71, 74);

chord.forEach((e) => {
  console.log(e + 12);
});

// forEach() digs through each value in an array and can do shid to them swag dope sick

//now hes shifting into conditionals

if (chord[1] > 63) {
  console.log("Major!");
} else if (chord[1] == 63) {
  console.log("Minor");
} else if (chord[1] == 65) {
  console.log("sus4");
}

// == means test that (4==6 "check in 4 is = to 6")
