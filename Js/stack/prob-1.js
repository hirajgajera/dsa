// push at the bottom of the stack
function pushAtBottom(stack, toBePushed) {
    if (stack.length === 0) {
        stack.push(toBePushed);
        return;
    }
    var currentTop = stack.pop();
    pushAtBottom(stack, toBePushed);
    stack.push(currentTop);
    // console.log(stack);
}
function CallMe() {
    var stack = new Array();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    pushAtBottom(stack, 4);
    console.log(stack[stack.length - 1]);
}
CallMe();
