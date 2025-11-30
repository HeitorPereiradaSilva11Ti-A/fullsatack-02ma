function init(){
 const navUL = document.querySelector("nav ul")

 const user = JSON.parse(sessionStorage.getItem("user"))

 if (user){
    navUL.innerHTML += `
                <li>
                    <h2>Usuário: ${user.name}</h2>
                </li>
                <li>
                    <button id="logout">Sair</button>
                </li>
    `

    document.querySelector("#logout").addEventListener("click", logout)

    return
 }

 navUL.innerHTML += `
                <li>
                    <a href="./pages/login/login.html">Login</a>
                </li>
 `
}

function logout(){
sessionStorage.removeItem("user")
window.location.reload()
}

init()