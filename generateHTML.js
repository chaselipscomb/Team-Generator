function generateHTML(team) {
  team = JSON.parse(team);
  var fifth;
  var arr = [];




  console.log(team);
  var result = "";
  for (var i = 0; i < team.length; i++) {
    Object.keys(team[i]).forEach(function (key) {
      arr.push(team[i][key]);
    });
  for(var j=4; j<arr.length; j++) {
      console.log(arr[j])
      fifth= arr[j];
  }
    result += `
      <div class="card" style="width: 18rem;">
      <div class="card-header">${team[i].name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[i].position}</li>
        <li class="list-group-item">${team[i].id}</li>
        <li class="list-group-item">${team[i].email}</li>
        <li class="list-group-item">${fifth}</li>
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

