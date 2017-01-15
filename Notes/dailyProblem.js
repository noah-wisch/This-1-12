function chemistry(full, short) {
    /**
     * input name of item
     * put letters into array
     * determine order of array (idk how to describe that)
     * make sure the two letters are within the order of the array
     * return true if they are - else false
     */

    full = full.toLowerCase();
    short = short.toLowerCase();
    // test to make sure length of abbrev is 2
    function length() {
        return short.length === 2; //return true if length is 2, false otherwise
    }
    // test to make sure letters appear in full name
    function letters() {
        return full.includes(short[0]) && full.includes(short[1]);
    }
    // test to see if letters appear in the right order
    function order() {
        return full.indexOf(short[0]) < full.indexOf(short[1]);
    }
    return (length() && letters() && order())
}
let isValid = chemistry('Coffee', 'Ce');
console.log(isValid);