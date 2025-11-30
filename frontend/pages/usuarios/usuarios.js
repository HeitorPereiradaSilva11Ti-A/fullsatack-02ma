const main = document.querySelector("main")


async function searchKrakens(){
  const persons = await fetch("https://backend-licao-marcio.vercel.app/").then(response => response.json())
  
  persons.map((person, index) =>{
    main.innerHTML += `
            <section>
            <h2>Nome: ${person.name}</h2>
            <p>Email: ${person.email}</p>
            <p>Idade: ${person.age}</p>
            <p>Apelido: ${person.nickname}</p>
        </section>
        ${index + 1 === persons.length ? "" : "<hr>"}
    `
  })
}

searchKrakens()