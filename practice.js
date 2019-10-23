team = [Manager = {
    name: 'Chase Lipscomb',
    position: 'Manager',
    id: '5',
    email: 'something@gmail.com',
    office: '15a'
},
Enginner = {
    name: 'David Sierra',
    position: 'Engineer',
    id: '6',
    email: 'somethingelse@gmail.com',
    git: 'davidsiearaa'
},
Intern = {
    name: 'Joe Dion',
    position: 'Intern',
    id: '7',
    email: 'sometincool@gmail.com',
    school: 'UCI'
}]

function print(team) {
    for (var i = 0; i < team.length; i++) {
        for (var key in team[0]) {
            console.log(key.value);
        }
    }
}
    
//print(team);

var arr = [];
Object.keys(team[0]).forEach(function (key) {
    arr.push(team[0][key]);
  });
for(var i=4; i<arr.length; i++) {
    console.log(arr[i])
}
 

   // console.log(team[0].keys(1));