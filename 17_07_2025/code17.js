let num  = 0;

function increment(num) {
return num + 1;
}

num = increment(num);
console.log(num); // Output: 1


// push and pop shift and unshift

let arr = [1,2];
arr.push(22);
console.log(arr)

arr.pop();
console.log(arr);

let b = arr.shift();
console.log(arr);
console.log(b); 

arr.unshift(b);
console.log(arr); // Output: [1, 2, 22]