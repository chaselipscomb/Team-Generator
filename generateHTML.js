function generateHTML(team) {
  team = JSON.parse(team);
  console.log(team);
  var result = "";
  for (var i = 0; i < team.length; i++) {
    result += `
      <div class="card" style="width: 18rem;">
      <div class="card-header">${team[i].name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[i].position}</li>
        <li class="list-group-item">${team[i].id}</li>
        <li class="list-group-item">${team[i].email}</li>
        <li class="list-group-item">${team[i].email}</li>
      </ul>
    </div>
    </body>
    </html>`;
  }
  return result;
}
module.exports = generateHTML;

/*var newDiv = $("<div class=card-div></div>");
var name= $(`<h2>${team[i].name}</h2>`);
var position= $(`<h2>${team[i].position}</h2>`);
var id= $(`<p>${team[i].id}</p>`);
var email= $(`<p>${team[i].email}<p>`);
newDiv.append(name)
newDiv.append(position)
newDiv.append(id)
newDiv.append(email)
//$("#htmlDivId").append(newDiv)
*/

