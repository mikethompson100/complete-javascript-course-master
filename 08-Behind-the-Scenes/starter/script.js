'use strict';
/// Mostly lecture lesson

function calcAge(birthyear) {
    const age = 2037 - birthyear;
    function printAge() {
        const output = `You are the ${age}, born in ${birthyear}`;
        console.log(output);

        if(birthyear >= 1969 && birthyear <= 1996)
        {
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str)
            function add(a,b) {
                return a + b;
            }
        }
        console.log(add(2, 5));
    }
    printAge();
    return age;
}

const firstName = 'Mike';
console.log(calcAge(1970));
