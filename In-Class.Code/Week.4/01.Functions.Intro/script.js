// Introduction to Music-Themed Function Expressions
// Function expressions let us define anonymous functions to model musical concepts and assign them to variables.

const hey = function (a_name) {
  //the code i want to copy
  console.log(`Hey, ${a_name}!`);
};

hey("Liam");
hey("Andrew");
hey("AJ");
hey("Robert");
//console.log(a_name); this wont work because "a_name"
//is used as a function and cannot be called in a greater sense.it works on things you can call

//console.log("Hey, Liam")
//console.log("Hey, Andrew")
//console.log("Hey, AJ")
//console.log("Hey, Robert")
// i wish to code this quicker
//inside the ( ) after "function()" goes paramaters. its how u call it

// so the lesson use function,put in some parameters and then yeah.then to call it
//use the name and then paranthesis to waht you want top function to act on

const makeChord = function (root, quality) {
  //makeChord takes a midi note number and gives us the Major chord buit off the note :O
  //console.log([root, root + 4, root + 7]);

  let chord = [root, quality];

  switch (quality) {
    case "major":
      chord.push(root + 4);
      chord.push(root + 7);
      break;
    case "minor":
      chord.push(root + 3);
      chord.push(root + 7);
      break;
    case "diminshed":
      chord.push(root + 3);
      chord.push(root + 6);
      break;
    case "D7":
      chord.push(root + 4);
      chord.push(root + 7);
      chord.push(root + 10);
      break;
  }
  return chord;
};

makeChord(60, "major");
makeChord(100, "minor");
makeChord(71, "D7");
console.log(chord);

// let fifth;
// let chord = [root];
//let third;
//let seventh, ninth;

// if (quality == "major") {
// third = root + 4;
// fifth = root + 7;
//} else if (quality == "minor") {
//  third = root + 4;
//  fifth = root + 7;
// } else if (quality == "augmented") {
//  third = root + 4;
//  fifth = root + 8;
// } else if (quality == "diminished") {
//  third = root + 3;
//  fifth = root + 6;
//} else if (quality == "D7") {
// third = root + 4;
//  fifth = root + 7;
//  seventh = root + 10;
// yadda yadda

//chord.push(third);
//chord.push(fifth);
//chord.push(seventh);
//console.log(chord);
