let item = document.querySelector("#item");
let list = document.querySelector("#to-do-box");

item.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    additems(item.value);
    item.value = "";
  }
});

const additems = (item) => {
  const lists = document.createElement("li");
  lists.innerHTML = `${item}
     <i class="fas fa-times"></i>
    `;

    lists.addEventListener("click", () =>{
            lists.classList.toggle("done");
        })

     lists.querySelector("i").addEventListener("click", () => {
        lists.remove();
     })

  list.appendChild(lists);
};

