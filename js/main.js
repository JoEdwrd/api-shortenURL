// Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  

  fetch("https://gotiny.cc/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ input: choice }),
}).then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerHTML = `Here is your shorten link : <a href="gotiny.cc/${data[0].code}">gotiny.cc/${data[0].code}</a>` 
  })
  .catch(err => {
    console.log(`error ${err}`) 
  })
}

