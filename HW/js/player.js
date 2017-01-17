
module.exports = function Player(name) {
    this.name = name;
    this.isFrozen = false;
    this.hasFlag = false;
    this.team = '';
    this.tag = function (runner) { //mash up of my function and King's function
        if (this.team === 'chasers' && runner.team === 'runners' || this.team === 'runners' && runner.team === 'chasers') {
            runner.isFrozen = true;
            return runner.name + ' was frozen by ' + this.name;
        } else {
            if (this.team === 'runners' && this.isFrozen === false && name.team === 'runners') {
                runner.isFrozen = false;
                console.log('line 15 = ' + runner.name);
                return runner.name + ' was unfrozen by ' + this.name;
            } else {
                if (this.team === 'runners' && this.isFrozen === true) {
                    console.log(' tagger is frozen ');
                    runner.isFrozen;
                    return this.name + ' can\'t unfreeze ' + runner.name + ' because ' + this.name + ' is currently frozen ';
                } else {
                    runner.isFrozen;
                    return 'unchanged';
                }
            }
        };
    }
}

// module.exports = function Player(name) { //Leo's module
//     this.name = name;
//     this.isFrozen = false;
//     this.team = null;
//     this.tag = function (player) {
//         if (this.team === 'Runners' && this.isFrozen === true) {
//             return 'Frozen players cannot unfreeze other players.'
//         }
//         if (this.team === 'Chasers' && player.team === 'Chasers') {
//             return 'Nothing happened.'
//         }
//         if (this.team === 'Runners' && player.isFrozen === true && player.team === 'Runners') {
//             player.isFrozen = false;
//             return player.name + ' was unfrozen by ' + this.name;
//         } else {
//             if (this.team === 'Chasers' && player.team === 'Runners') {
//                 player.isFrozen = true;
//                 return player.name + ' was frozen by ' + this.name;
//             }
//         }
//     };