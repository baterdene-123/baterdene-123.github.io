// let pass = "Baterdenes123";

// const jijigLetter = document.querySelector(".jijigLetter");
// const Tom = document.querySelector(".Tom");
// const num = document.querySelector(".num");
// const length = document.querySelector(".length");
// const input = document.querySelector("#password-field");


// let jijigUseg = /[a-z]/;
// let tomUseg =/[A-Z]+/;
// let number = /[0-9]/;
// let len = /.{8,}/;



// console.log(jijigUseg.test(pass));
// console.log(tomUseg.test(pass));
// console.log(number.test(pass));
// console.log(len.test(pass));

// // Form validator

// input.addEventListener("input",function(){
//     if(jijigUseg.test(pass)){

//         jijigLetter.classList.remove("jijigLetter");
//         jijigLetter.classList.add("nemelt")
//     }
// })
// var password = prompt("Нууц үгээ оруулна уу...")

// let jijigUSeg = /[a-z]/;
// let tomUseg =/[A-Z]/;
// let number = /[0-9]/;
// let len = /.{8,}/;

// if(jijigUSeg.test(password) && 
//      tomUseg.test(password) &&
//       number.test(password) &&
//          len.test(password)){
//         alert("Нууц үг үүслээ...")
// }else{
//      alert("Нууц үг таарахгүй байна...")
// }




// password regular expression
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
// var submit = document.getElementById("submit");


myInput.onkeyup = function(){
    // lowercase letters
     var lowerCaseLetters = /[a-z]/g;
     if(myInput.value.match(lowerCaseLetters)){
         letter.classList.remove("invalid");
         letter.classList.add("valid");
     }else{
         letter.classList.remove("valid");
         letter.classList.add("invalid");
     }


//    validate capital letters
     
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
  capital.classList.remove("invalid");
  capital.classList.add("valid");
} else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
}
// validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {  
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid");
}
//  balidate length
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};