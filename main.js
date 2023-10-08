let button = document.getElementById("action-button");
let form = document.getElementById("form");
let output = document.getElementById("data-row");
let colorPicker = document.getElementById("input-color");
let storage = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputs = this.getElementsByTagName("input");
  storage.push(new Costomer(inputs[0].value, inputs[1].value, inputs[2].value));
  console.log(storage);
  let costomerInfo = storage[storage.length - 1];
  output.innerHTML += `
    <tr>
      <td>${costomerInfo.fullname}</td>
      <td>${costomerInfo.Email}</td>
      <td>${costomerInfo.age}</td>
      <td>
      <button class="btn btn-danger btn-sm" onclick= handleDelete(this)>
      <i class="bi bi-trash-fill"></i>
      <i class="bi bi-3-circle"></i>
      </button>
      </td>
      <td>
      <form action="./form.html">
      <button type="submit"   class="btn btn-primary btn-sm">
      <i class="bi bi-pencil-square"></i>
      <i class="bi bi-3-circle"></i>
      </button>
      </form>
      </td>
      </tr>
  `;
});
function handleDelete (arg) {
 
  let td = arg.parentNode;
  console.log(td.parentNode);
  td.parentNode.remove();
}
function modifyInputs() {
 
  
}

//    Blueprint
class Costomer {
  constructor(fname, mail, age) {
    (this.fullname = fname), (this.Email = mail), (this.age = age);
  }
}
