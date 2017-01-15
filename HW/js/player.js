
module.exports = function Player(name) {
    this.name = name;
    this.isFrozen = false;
    this.hasFlag = false;
    this.team = '';
    this.tagged = function  (status) {
        return status.isFrozen = true;
    };
}


// not actual code
//Player.tag(player); // if the first is a chaser, the second player is frozen
                    // if the first and second players are runners, the second player is unfrozen
//Player.getFlag();   // if the player is a runner, get the flag
//Team.won();         // returns true if the team has won, or false if not (see rules above)
//Team.add(player);   // add a player to the team
