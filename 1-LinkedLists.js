class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(node.value);
            node = node.next;
        }
    }

    reverse() {
        let current = this.head;
        let prev = null;
        this.tail = this.head;

        while (current !== null) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

function mergeLists(list1, list2) {
    list1.reverse();
    list2.reverse();

    const mergedList = new LinkedList();

    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 !== null && current2 !== null) {
        if (current1.value <= current2.value) {
            mergedList.append(current1.value);
            current1 = current1.next;
        } else {
            mergedList.append(current2.value);
            current2 = current2.next;
        }
    }

    while (current1 !== null) {
        mergedList.append(current1.value);
        current1 = current1.next;
    }

    while (current2 !== null) {
        mergedList.append(current2.value);
        current2 = current2.next;
    }

    return mergedList;
}


const list1 = new LinkedList();
list1.append(38);
list1.append(3);
list1.append(1);

const list2 = new LinkedList();
list2.append(11);
list2.append(4);
list2.append(2);

const mergedList = mergeLists(list1, list2);
mergedList.print();
