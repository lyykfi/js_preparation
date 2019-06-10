class LinkedListNode {
    value = null;
    next = null;

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head = null;
    tail = null;

    constructor() {

    }

    push(value) {
        const newNode = new LinkedListNode(value, null);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    search(value) {
        let item = this.head;

        while (item) {
            if (item.value === value) {
                return true;
            }

            item = item.next;
        }

        return false;
    }
}

const newList = new LinkedList();
newList.push(4);
newList.push(5);
newList.push(1);
newList.push(2);

console.log(newList);
console.log(newList.search(1));