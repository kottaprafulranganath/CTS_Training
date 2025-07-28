let num = 10;
num++;
console.log(num); // Output: 11
num--;  
console.log(num); // Output: 10
num += 5;
console.log(num); // Output: 15
num -= 3;
console.log(num); // Output: 12
num *= 2;
console.log(num); // Output: 24
num /= 4;
console.log(num); // Output: 6
num %= 5;
console.log(num); // Output: 1
num **= 3;
console.log(num); // Output: 1


var Str = "Hi this \"Ranganath\"";
console.log(Str); // Output: Hi this "Ranganath"

var str1 = 'hello this is Ranganath a "JavaScript developer"';
console.log(str1); // Output: hello this is Ranganath a "JavaScript developer

var str2 = "Hello this is ranganath" + " and I am a JavaScript developer";
console.log(str2); // Output: Hello this is ranganath and I am a JavaScript developer

let str3 = "this first line ";
str3 += "this is second line";
console.log(str3); // Output: this first linethis is second line

let str4 = "Ranganath";
let str40 = "I am " + str4;
let str41 = str40 + " and I am a JavaScript";
console.log(str41); // Output: I am Ranganath and I am a JavaScript


var str5 = "Ranganath";
var i = 0;
let str50 = [];
for (i = 0; i < str5.length; i++) {
    console.log(str5[i]); // Output: R, a, n, g, a, n, a, t, h
  str50.push(str5[i]);
}

let str6 = ["Ranganath",2,true];
for(j = 0; j < str6.length; j++) {
    console.log(str6[j]); // Output: Ranganath, 2, true 
}


let str7 = [["Ranganath", 2, true], ["JavaScript", 3, false]];
for (let k = 0; k < str7.length; k++){
    for (let l = 0; l < str7[k].length; l++)
    {
        console.log(str7[k][l]);
    }
}

let str8 = [[1,2,3],[4,5,6],[[7,8,9],2,3]];
console.log(str8[0][0]); // Output: 7
console.log(str8[2][2]);
console.log(str8[2][0][1]); // Output: 9

let str9 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare pulvinar lectus ut sagittis. In malesuada, nisl a condimentum dapibus, leo nisl accumsan lectus, vel ultricies leo nunc et orci. Quisque facilisis massa et mattis tincidunt. Praesent lobortis blandit porta. Cras et rhoncus purus. Praesent sagittis sem non elit convallis, id porttitor metus gravida. Nullam leo neque, sodales non massa ut, convallis consequat elit. Maecenas elit nulla, facilisis vel fermentum nec, placerat ut augue. Duis dapibus auctor orci facilisis dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed diam diam, feugiat in neque ac, rhoncus dignissim turpis. Aliquam id mi nec enim blandit volutpat eu ac mauris. Proin sed lectus at urna commodo accumsan. Donec porttitor enim vitae sollicitudin mollis. Nullam gravida lorem metus, eu pharetra magna bibendum at. Etiam ac est nec est lacinia sodales quis quis lorem.";
let str10 = [];
let ptr = 0;
for (let i = 0; i < str9.length; i++) {
    if (str9[i] === ".") {
        let sentence = str9.slice(ptr, i + 1).trim(); 
        if (sentence.length > 0) {
            str10.push(sentence);
        }
        sentenceStart = i + 1; 
    }
}

console.log(str10[0]); 