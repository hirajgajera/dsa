class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
};


class Stack {
    head = null;

    isEmpty() {
        return this.head === null
    }

    push(data: number) {
        let newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Can't pop, Stack is empty!");
            return -1;
        }

        let topOfStack = this.head.data;
        this.head = this.head.next;

        return topOfStack;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return -1;
        }

        return this.head.data;
    }
}


function CallMe() {
    let newStack = new Stack();
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
