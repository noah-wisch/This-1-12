module.exports = function Team(group) {

    let chasers = [];
    let runners = [];

    let players = {
        addChaser: function (name) { // add someone to the array
            chasers.push(name);
            return name.team = ('Chaser')
        },
        addRunner: function (name) { // add someone to the array
            runners.push(name);
            return name.team = ('Runner')
        },
        announce: function () { // console.log everyone's name
            for (let i = 0; i < chasers.length; i++) {
                console.log(chasers[i] + ' is a chaser');
            }
            for (let i = 0; i < runners.length; i++) {
                console.log(runners[i] + ' is a runner');
            }
        },
    };
    console.log(chasers);
    console.log(runners);
    return players;
}

/**
 * Victiory for chasers is all runners are frozen
 * 
 * Victory for runners is someone has the flag
 * 
 * frozenness can be a boolean value
 * 
 * keep track of teams 
 * 
 * flagSitch is a boolean as well
 */