const stackUtility = require('../../DataStructures/Stack/stack');
const Stack = stackUtility.Stack;

function isBalanced(paranthesisString) {
    let stack = new Stack();
    if (paranthesisString === null || paranthesisString === undefined || paranthesisString.length % 2 !== 0) {
        return false;
    }
    for (let i = 0; i < paranthesisString.length; i++) {
        if (paranthesisString[i] === '[' || paranthesisString[i] === '{' || paranthesisString[i] === '(') {
            stack.push(paranthesisString[i]);
        }
        else {
            if (paranthesisString[i] === ']') {
                if (stack.pop() !== '[') {
                    return false;
                }
            }
            if (paranthesisString[i] === '}') {
                if (stack.pop() !== '{') {
                    return false;
                }
            }
            if (paranthesisString[i] === ')') {
                if (stack.pop() !== '(') {
                    return false;
                }
            }
        }
    }
    if (stack.length > 0)
        return false;
    return true;
}

console.log(isBalanced(`{()(){()[([{}])]}}`));
console.log(isBalanced(`{{{{{`));
console.log(isBalanced(`}}}}}`));
console.log(isBalanced(``));
console.log(isBalanced(`{}{}{{}`));
console.log(isBalanced(`{[()}`));
console.log(isBalanced(`{[[[{{[](((({[][]()}))))}}]]]}`));
console.log(isBalanced(null));
console.log(isBalanced(undefined));
