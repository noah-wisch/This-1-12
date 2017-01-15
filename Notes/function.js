/** 
 * Function:
 *  - Name: name
 *  - Scope: global
 *  - Inputs: one string
 *  - Output: string
 */

function name(first) {
    let caps = first.toUpperCase();

    /** 
     * Function:
     *  - Name: capitalize
     *  - Scope: name
     *  - Inputs: one string
     *  - Output: string
     */

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice[1].toLowerCase();
    }
    return caps;
}

// Name: anona, Scope: global, Inputs: one string Outputs: number 
let wordify = function (word) {
    if (word.length > 3) {
        // Name: lengthy, Scope: if, Inputs: one string, Outputs: number 
        function lengthy(word) {
            return word.length;
        }
        return lengthy(word);
    } else {
        return word.length + 4;
    }
};

let dinner = {
    eat: function () {
        console.log('eating food');
    },
    amount: 50,
};

dinner.eat();

// return an object that has an 'add' funciton
// you can use this to add users to userList

// Lukes secret upgrade idea

function userList() {
    let peeps = []; // where peeps are stored

    let users = {
        add: function (name) { // add someone to the array
            peeps.push(name);
        },
        announce: function () { // console.log everyone's name
            for (let i = 0; i < peeps.length; i++) {
                console.log(peeps[i]);
            }
        },
    };
    return users;
} // end of userList function

let list = userList();
list.add('Watson');
list.add('Williams');
list.announce();