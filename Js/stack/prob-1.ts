// push at the bottom of the stack


function pushAtBottom(stack: number[], toBePushed: number) {

    if (stack.length === 0) {
        stack.push(toBePushed);
        return;
    }

    let currentTop = stack.pop();
    pushAtBottom(stack, toBePushed);
    stack.push(currentTop);
}

function CallMe() {
    let stack = new Array();

    stack.push(3);
    stack.push(2);
    stack.push(1);

    pushAtBottom(stack, 4);
}

CallMe();