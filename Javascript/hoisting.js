// Given 1: 
console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
/*
var hello;
console.log(hello); //logs undefined
hello = "world";
*/

// Given 2: 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
/*
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle); // logs magnet
}
test();
needle = 'haystack';
*/

// Given 3: 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
/*
var brendan;
function print(){
    brendan = 'only okay'; // would change the global var brendan to "only okay"
    console.log(brendan); // would output only okay if called
}
brendan = 'super cool';
console.log(brendan); // outputs 'super cool' because print() was never called
*/

// Given 4: 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
/*
var food
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); // logs "half-chicken"
    food = 'gone';
}
var food = 'chicken';
console.log(food);// logs "chicken"
eat();
*/
console.log('\n');
// Given 5: 
//mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
/*
var mean;
mean = function() {
    var food;
    food = "chicken";
    console.log(food); // logs chicken
    food = "fish";
    console.log(food); // logs fish
}
mean(); // causes runtime error, mean() function doesn't exist.
console.log(food); // logs nothing
console.log(food); // logs nothing
*/

// Given 6: 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
/*
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // logs rock
    genre = "r&b";
    console.log(genre); // logs r&b
}
console.log(genre); // logs undefined
genre = "disco";
rewind();
console.log(genre); // logs disco
*/

// Given 7: 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
/*
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); // logs seattle
    var dojo = "burbank";
    console.log(dojo);// logs burbank
}
dojo = "san jose";
console.log(dojo); // logs san jose
learn();
console.log(dojo); // logs san jose
*/

// Given 8: 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
/*
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // TypeError, cannot assign closed for now due to const.
    }
    return dojo;
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
}
*/