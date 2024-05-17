// reverse the stack
function pushAtBottom(stack, toBePushed) {
    if (stack.length === 0) {
        stack.push(toBePushed);
        return;
    }
    var currentTop = stack.pop();
    pushAtBottom(stack, toBePushed);
    stack.push(currentTop);
}
function reverseTheStack(stack) {
    if (stack.length === 0) {
        return;
    }
    var currentTop = stack.pop();
    reverseTheStack(stack);
    pushAtBottom(stack, currentTop);
    console.log("stack", stack);
}
function CallMe() {
    var stack = new Array();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    console.log("stack before ops", stack);
    reverseTheStack(stack);
}
CallMe();
