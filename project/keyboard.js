console.log('Project 5');

let insert = document.querySelector("#insert")

window.addEventListener("keydown",(event)=>{
  insert.innerHTML = `
  <table>
  <tr>
  <th>key</th>
  <th>keyCode</th>
  <th>keyNumber</th>
  </tr>
  <tr>
  <td>${event.key === " "?"Space":event.key}</td>
  <td>${event.keyCode}</td>
  <td>${event.code}</td>
  </tr>
  </table>
  `
})