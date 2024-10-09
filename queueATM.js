class Queue {
    constructor() {
        this.queue = [];
    }

    push(element) {
        this.queue.push(element);
        return this.queue;
    }

    pop() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    //reto extra: ordenar la fila de acuerdo al tiempo de llegada
    menorTiempoLlegada(){
        return this.queue.sort((a, b) => a.arrivedTime - b.arrivedTime);
    }

    print(){
        console.log(this.queue);
    }
}

const persona1 = {name: "nombre1", arrivedTime: 3}
const persona2 = {name: "nombre2", arrivedTime: 2}
const persona3 = {name: "nombre3", arrivedTime: 1}


const filaCajero = new Queue();
console.log(filaCajero.isEmpty());
filaCajero.push(persona1);
filaCajero.push(persona2);
filaCajero.push(persona3);
console.log(filaCajero.menorTiempoLlegada())
filaCajero.print();
console.log(filaCajero.size());
console.log(filaCajero.peek());
console.log(filaCajero.pop());
filaCajero.print();