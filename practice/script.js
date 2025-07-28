// function butclick(){
//    let val  = document.getElementById("text");
//    if (val.innerHTML === "hello"){
//        val.innerHTML = "Ranganath";
//    } else {
//        val.innerHTML = "hello";
//    }

// }


// function butclick(){
//    let val = document.getElementById("text");

//    if (val.style.display == "none") {
//       val.style.display = "block";
//    }
//    else {
//       val.style.display = "none";
//    }

//    window.alert("Button clicked!");
//    console.log("Button clicked!");

   
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    document.getElementById("text").innerHTML =  arr[i];
// }

var val = {
   name: "Ranganath",
   age: 21,
   city: "Hyderabad",
};

var call = {};

call.name = val.name;
call.age = val.age;  

//document.getElementById("text").innerHTML = val.name + " " + val.age + " " + val.city;
document.getElementById("text").innerHTML = call.name + " " + call.age;