// reverse the stack


function pushAtBottom(stack: number[], toBePushed: number) {

    if (stack.length === 0) {
        stack.push(toBePushed);
        return;
    }

    let currentTop = stack.pop();
    pushAtBottom(stack, toBePushed);
    stack.push(currentTop);
}



function reverseTheStack(stack: number[]) {
    if (stack.length === 0) {
        return;
    }

    let currentTop = stack.pop();
    reverseTheStack(stack);
    pushAtBottom(stack, currentTop);

    console.log("stack", stack);
}


function CallMe() {
    let stack = new Array();

    stack.push(3);
    stack.push(2);
    stack.push(1);

    console.log("stack before ops", stack);


    reverseTheStack(stack);

}

CallMe();