const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signIn()
}


async function signIn() {
   const email = document.querySelector("#email").value
   const password = document.querySelector("#password").value

   if (email === "" || password === ""){
    alert("PREENCHA TODAS AS INFORMAÇÕES, animal!")
    return
   }

   const user =  {
    email,
    password
   }

   const response = await fetch("https://backend-licao-marcio.vercel.app//login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
   }).then(response => response.json())

   console.log(response)

   if(response.message){
    alert(response.message)
    return
   }

   const {id, name} = response

   sessionStorage.setItem("user", JSON.stringify({id, name}))
   alert("Login realizado com sucesso")
   window.location.href = "../../index.html"
}