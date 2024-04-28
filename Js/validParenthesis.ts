function isValid(s) {
    const stack = [];

    for (const b of s) {
        if (b === "(" || b === "{" || b === "[") {
            stack.push(b);
        } else {
            if (!stack.length || b === ")" && stack[stack.length - 1] !== '(' || b === "}" && stack[stack.length - 1] !== '{' || b === "]" && stack[stack.length - 1] !== '[') return false;
            stack.pop();
        }
    }

    return !stack.length;
};

console.log(isValid("(({]))"));