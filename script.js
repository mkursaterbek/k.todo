let storage = [];
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let ul = document.querySelector("#liste");
  let input = document.querySelector("#input");
  let list = document.createElement("li");
  let btnX = document.createElement("button");

  if (input.value.length == "") {
    alert("görev giriniz ulan!!");
  } else {
    btnX.setAttribute("class", "btnX");
    btnX.innerHTML = "X";
    list.innerHTML = input.value;
    ul.appendChild(list);
    list.appendChild(btnX);
    storage.push(input.value);
    input.value = "";
  }
  console.log(storage);
});
