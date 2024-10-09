class Node {
    constructor(title, description, points, next = null, prev = null) {
        this.title = title;
        this.description = description;
        this.points = points;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append({title, description, points}) {
        const newNode = new Node(title, description, points);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
    }

    peek(title, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (current !== null) {
            if (current.title === title) {
                return true;
            } else {
                return this.peek(title, current.next);
            }
        }

        return false;
    }

    size(current = this.head, acum = 1) {
        if (this.head === null) {
            return 0;
        }

        if (current.next !== null) {
            return this.size(current.next, acum + 1);
        }

        return acum;
    }

    remove(title, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (this.head.title === title) {
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            return true;
        }

        while (current !== null && current.next !== null) {
            if (current.next.title === title) {
                const toRemove = current.next;
                current.next = toRemove.next;
                if (toRemove.next !== null) {
                    toRemove.next.prev = current;
                } else {
                    this.tail = current;
                }
                return true;
            }
            current = current.next;
        }

        return false;
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(`Title: ${node.title}, Description: ${node.description}, Points: ${node.points} | Next: ${node.next ? node.next.title : null}\n`);
            node = node.next;
        }
    }
}

const todo = new LinkedList();

let task1 = {
    title: "Practicar escalas mayores",
    description: "Practicar escalas mayores en todas las tonalidades durante 30 minutos",
    points: 5
};

let task2 = {
    title: "Ejercicios de arpegios",
    description: "Practicar arpegios básicos por 15 minutos",
    points: 3
};

let task3 = {
    title: "Repasar intervalos",
    description: "Estudiar intervalos de tercera y quinta",
    points: 7
};

todo.append(task1);
todo.append(task2);
todo.append(task3);

todo.print();

console.log(`¿La tarea "Ejercicios de arpegios" está en la lista? ${todo.peek("Ejercicios de arpegios")}\n`);

console.log(`El número de tareas en la lista es: ${todo.size()}\n`);

console.log(`¿Se eliminó la tarea "Ejercicios de arpegios"? ${todo.remove("Ejercicios de arpegios")}`);

console.log("Lista después de eliminar una tarea:");
todo.print();

console.log(`Número de tareas en la lista después de eliminar: ${todo.size()}`);