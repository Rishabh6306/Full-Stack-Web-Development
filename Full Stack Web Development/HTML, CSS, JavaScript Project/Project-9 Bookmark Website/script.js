let backbutton = document.getElementById("back");
let addbutton = document.getElementById("btn");
let boxes = document.getElementById("boxes");
let second = document.getElementById("secondcontainer");
let websitename = document.getElementById("Website");
let websiteurl = document.getElementById("url");
let form = document.getElementById("form");
let bookmarkArray= [];


// for add bookmarks  class
addbutton.addEventListener("click", () => {
    second.classList.add("secondcontainerclass");
});


// for remove bookmark class
backbutton.addEventListener("click", () => {
    second.classList.remove("secondcontainerclass");
});


// if anyone click anywhere on the window then you be backed
window.addEventListener("click", (e) => {
      if (e.target.id === "secondcontainer") {
        second.classList.remove("secondcontainerclass");
      }
})


// check both inputs filled or not 
function Validitformfield(name, url) {
    if (name === "" || url === "") {
        alert("fill both fileds");
        return false;
    }
    
    // check url is valid or not 
    let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression); 

    // if url is not valid 
    if (!url.match(regex)) {
        alert("Enter Valid Url");
        return false;
    }
    // if it's valid 
     return true;
};


// if you want to remove bookmark,  delete button
function deleteBookmark(url) {
    bookmarkArray.forEach((r, index) => {
        if (r.url === url) {
            bookmarkArray.splice(index, 1)
        }
    })
    localStorage.setItem("bookmark",JSON.stringify(bookmarkArray))
    fetchlocalstorage()
}


// save your url in your page 
function builddom() {
    boxes.innerHTML = ""
    bookmarkArray.forEach(r => {
        let { name, url } = r
        boxes.innerHTML += `
      <div id ="box">
      <div id="delete" onclick="deleteBookmark('${url}')"><i class="fa-solid fa-trash"></i></div>
      <div id = "name">
      <img src="https://s2.googleusercontent.com/s2/favicons?domain=${url}" alt="">
      <a href="${url}">${name}</a>
     </div>
     </div>`
    })
}


// save url in your local Storage also 
function fetchlocalstorage() {
    if (localStorage.getItem("bookmark")) {
    bookmarkArray = JSON.parse(localStorage.getItem("bookmark"))
    }
    localStorage.setItem("bookmark", JSON.stringify(bookmarkArray))
    builddom();
}


// if you click submit button 
form.addEventListener(("submit"), (e) => {
    e.preventDefault();
    if(!websiteurl.value.includes("http://") && !websiteurl.value.includes("https://")) {
       websiteurl.value = `https://${websiteurl.value}`
    } 

    if(!Validitformfield(websitename.value, websiteurl.value)) {
        return false;
    }


// conver bookmark empty array to object 
bookmarkObj = {
    name: websitename.value,
    url:  websiteurl.value
}

// push in object
bookmarkArray.push(bookmarkObj)

localStorage.setItem("bookmark", JSON.stringify(bookmarkArray))
fetchlocalstorage()

//  Empty the inputbox when you add bookmark
form.reset()
});

fetchlocalstorage()