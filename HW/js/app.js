
let Player = require('./player');
let Team = require('./team');
let Flag = require('./flag');

window.addEventListener('load', function () {
    console.log('You\'re it')
});

let playerList = [
    new Player('Deshaun'),
    new Player('Mike'),
    new Player('Hunter'),
    new Player('Artavis'),
    new Player('Wayne'),
    new Player('Jordan'),
];

// function changeTeam () {
//     this.team = 'runner'
// }

teams = new Team();

teams.addChaser(playerList[0]);
teams.addChaser(playerList[1]);
teams.addChaser(playerList[2]);
teams.addRunner(playerList[3]);
teams.addRunner(playerList[4]);
teams.addRunner(playerList[5]);
//teams.announce();
console.log(playerList[0].tag(playerList[5]));
//console.log(playerList[4].name + '\'s frozen status is ' + playerList[0].tag(playerList[4]));

// function for win or lose...
