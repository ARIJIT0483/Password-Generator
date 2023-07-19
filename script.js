const capital = document.getElementById("capital-letter");
const small = document.getElementById("small-letter");
const special = document.getElementById("special-letter");
const number = document.getElementById("number");
const showPassword = document.getElementById("show-password");
let capitalLetter = "ABCDEFGHIJKLMNOPOQRSTUVWXYZ";
let smallLetter = "abcdefghijklmnopqrstuvwxyz";
let specialLetter = "!@#$%^&*()[]+-./;={}<>?~:";
let numberLetter = "01234567899";

const generatePasswords = () => {
  let a = Math.round(Math.random() * 10);
  let b = Math.round(Math.random() * 10);
  let d = Math.round(Math.random() * 10);
  let e = Math.round(Math.random() * 10);

  console.log("value of e is : " + e);
  let arrCapital = Array.from(capitalLetter)[a];
  let arrSmall = Array.from(smallLetter)[b];
  let arrSpecial = Array.from(specialLetter)[d];
  let arrNumber = Array.from(numberLetter)[e];

  console.log(Array.from(capitalLetter)[a]);
  console.log(Array.from(smallLetter)[b]);
  console.log(Array.from(specialLetter)[d]);
  console.log(Array.from(numberLetter)[e]);
  let c = document.getElementById("slider").value;
  c = Number.parseInt(c);
  let strNew = "";

  for (let i = 1; i <= c; i++) {
    if (capital.checked == true) {
      strNew += arrCapital;
    }
    if (small.checked == true) {
      strNew += arrSmall;
    }
    if (special.checked == true) {
      strNew += arrSpecial;
    }
    if (number.checked == true) {
      strNew += arrNumber;
    }
  }
  showPassword.value = strNew.slice(0, c);
  document.getElementById("copied").style.display = "none";
};
function myFunction () {
  

  // Select the text field
  showPassword.select();
  showPassword.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(showPassword.value);
  
  // Alert the copied text
  // alert("Copied the text: " + showPassword.value);
  document.getElementById("copied").style.display = "block";
}
number.addEventListener("click",()=>{
  document.getElementById("number-checked").classList.toggle("backChange")
});
capital.addEventListener("click",()=>{
  document.getElementById("capital-checked").classList.toggle("backChange")
});
small.addEventListener("click",()=>{
  document.getElementById("small-checked").classList.toggle("backChange")
});
special.addEventListener("click",()=>{
  document.getElementById("special-checked").classList.toggle("backChange")
});