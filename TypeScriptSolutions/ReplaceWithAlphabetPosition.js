"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function alphabetPosition(text) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    //filtering out any unstring element
    const arr = text
        .toLowerCase()
        .split("")
        .filter((letter) => /[a-z]/i.test(letter));
    let results = [];
    for (let char of arr) {
        results.push(alphabet.indexOf(char) + 1);
    }
    return results.join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//# sourceMappingURL=ReplaceWithAlphabetPosition.js.map