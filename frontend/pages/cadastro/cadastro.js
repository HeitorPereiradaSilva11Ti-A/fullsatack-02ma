const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signUpKraken()
}


async function signUpKraken() {
   const name = document.querySelector("#name").value
   const email = document.querySelector("#email").value
   const age = document.querySelector("#age").value
   const nickname = document.querySelector("#nickname").value
   const password = document.querySelector("#password").value

   if (name === "" || email === "" || age === "" || nickname === "" || password === ""){
    alert("PREENCHA TODAS AS INFORMAÇÕES, animal!")
    return
   }

   const user =  {
    name,
    email,
    age,
    nickname,
    password
   }

   const response = await fetch("https://backend-licao-marcio.vercel.app//cadastrar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
   }).then(response => response.json())

   const { message } = response

   alert(message)

   window.location.href = "../../index.html"
}