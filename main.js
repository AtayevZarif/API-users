let sect = document.querySelector("section")
let btn = document.querySelector("button")
let container = document.querySelector("div")
let text = document.getElementsByTagName("h2")


if (localStorage.length != 0) {
    for (let i = 0; i < 5; i++) {
        text[i].className = localStorage.getItem("text")
    }
    container.className = localStorage.getItem("container")
    
    text[0].innerText = "Id: " + localStorage.getItem("id")
    text[1].innerText = "Firstname: " + localStorage.getItem("firstname")
    text[2].innerText = "Lastname: " + localStorage.getItem("lastname")
    text[3].innerText = "Username: " + localStorage.getItem("username")
    text[4].innerText = "Email: " + localStorage.getItem("email")
}


let appearanceFunction = () => {
    fetch("users")
    .then(res => res.json())
    .then(users => innerFunction(users[Math.trunc(Math.random() * users.length)]))
    .catch(err => console.error("fetch error:", err))
    
    let innerFunction = (users) => {
        text[0].innerHTML = "Id: " + users.id
        text[1].innerHTML = "Firstname: " + users.name.split(" ")[0]
        text[2].innerHTML = "Lastname: " + users.name.split(" ")[1]
        text[3].innerHTML = "Username: " + users.username
        text[4].innerHTML = "Email: " + users.email

        for (let i = 0; i < 5; i++) {
            text[i].className = "text"
        }
        container.className = "container"


        localStorage.setItem("text", "text")
        localStorage.setItem("container", "container")

        localStorage.setItem("id", users.id)
        localStorage.setItem("firstname", users.name.split(" ")[0])
        localStorage.setItem("lastname", users.name.split(" ")[1])
        localStorage.setItem("username", users.username)
        localStorage.setItem("email", users.email)
    }
}

btn.addEventListener("click", appearanceFunction)