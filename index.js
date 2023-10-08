let button = document.getElementById("action-button");
let form = document.getElementById("form");
let output = document.getElementById("data-row");
let colorPicker = document.getElementById("input-color");

// window.addEventListener("DOMContentLoaded" ,()=>{ 
//   loadInfo();
// });

let storage = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputs = this.getElementsByTagName("input");
  let index = 0;
  index+=1;
  storage.push({
    fullname: inputs[0].value,
    email: inputs[1].value,
    age: inputs[2].value,
    id: getIndex(),
  });
  function getIndex() {
    let index = 0;
    index+=1;
    return index;
  };
  
  let customerInfo = storage[storage.length-1];
  output.innerHTML += `
    <tr>
    <td>${customerInfo.fullname}</td>
    <td>${customerInfo.email}</td>
    <td>${customerInfo.age}</td>
    <td>${customerInfo.id}</td>
    <td>
    <button class="btn btn-danger btn-sm" onclick= handleDelete(this)>
    <i class="bi bi-trash-fill"></i>
    <i class="bi bi-3-circle"></i>
    </button>
    </td>
    <td>
    <a href="./form.html" class="btn btn-primary btn-sm" onclick= modifyInputs(this)>
    <i class="bi bi-pencil-square"></i>
    <i class="bi bi-3-circle"></i>
    </a>
    </td>
    </tr>
    `;
  // it was  local storage.
  // for (let i = 0; i <storage.length; i++) { 
  //   localStorage.setItem("customer " + i,JSON.stringify(storage[i]));
  // }
  // loadInfo();
});
colorPicker.addEventListener("change", function () {
  let colorValue = this.value;
  console.log(colorValue);
  form.style.background = colorValue;
  let inputs = form.getElementsByTagName("input");
  let invertedColor = invertColor(colorValue);
  console.log(invertedColor);
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].style.background = invertedColor;
  }
});
// how to make the opposite of a color or contrast in Javascript
function invertColor(hex) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  //  convert 3-digit hex to 6-digits
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[3];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid Hex Color");
  }
  // Invert color components
  let r = 255 - parseInt(hex.slice(0, 2), 16).toString(16),
    g = 255 - parseInt(hex.slice(2, 4), 16).toString(16),
    b = 255 - parseInt(hex.slice(4, 6), 16).toString(16);
// pad each with zeros and return
  console.log(padZero(r));
  return '#' + padZero(r) + padZero(g) + padZero(b);
};
function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
};
function loadInfo (){
  
  for (let index = 0; index < storage.length; index++) {
    // let customerInfo = JSON.parse(localStorage.getItem("customer " + index))
    output.innerHTML += `
    <tr>
    <td>${customerInfo.fullname}</td>
    <td>${customerInfo.email}</td>
    <td>${customerInfo.age}</td>
    <td><button class="btn btn-danger btn-sm" onclick= handleDelete(this)>Delete</button></td>
    </tr>
    `;
  }
}
function handleDelete (arg) {
  let td = arg.parentNode;
  console.log(td.parentNode);
  td.parentNode.remove();
}
function modifyInputs (par) {

}
// add a button called modify when it is clicked it open a new page with a form filled with the information  to modify 
// the info will be updated\
let body = document.getElementById("body");
// let colors = ["red", "blue", "cyan", "purple", "gray", "pink", "green", "lightblue", "lightgray"];
// let i = 0;
// while (i < colors.length) {
//   setInterval(()=>{
//   body.style.background = colors[i];
//   }, 3000);
//   i++
//   }
setInterval(
  function () {
    let color = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + color;
  }, 3000)
  console.log(Math.random()*16777215);



