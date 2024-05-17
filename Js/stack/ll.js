var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
;
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
    }
    Stack.prototype.isEmpty = function () {
        return this.head === null;
    };
    Stack.prototype.push = function (data) {
        var newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            console.log("Can't pop, Stack is empty!");
            return -1;
        }
        var topOfStack = this.head.data;
        this.head = this.head.next;
        return topOfStack;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return -1;
        }
        return this.head.data;
    };
    return Stack;
}());
function CallMe() {
    var newStack = new Stack();
    newStack.push(2);
    newStack.push(4);
    newStack.push(1);
    console.log(newStack.peek());
    newStack.pop();
    newStack.pop();
    newStack.pop();
    newStack.pop();
    console.log(newStack.peek());
}
CallMe();
