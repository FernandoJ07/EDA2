class Graph{
    constructor(){
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node){
        this.nodes.push(node);
        this.adjList[node.nombre] = [];
    }

    addEdge(persona, ciudad){
        this.adjList[persona.nombre].push(ciudad.nombre)
        this.adjList[ciudad.nombre].push(persona.nombre)

    }

    printGraph(){
        console.log(this.adjList)
    }

    searchNode(value){
        if (!this.nodes.length){
            return;
        }
        return this.nodes.find(item => item.nombre === value);
    }

    printAdjancency(value){
        if(this.searchNode(value)){
            console.log(this.adjList[value])
        }else{
            return;
        }
    }

    printFriendsAndCities(nombreCiudad) {
        const ciudad = this.searchNode(nombreCiudad);
        if (ciudad) {
            const personas = this.adjList[nombreCiudad].filter(nombre => {
                const nodo = this.searchNode(nombre);
                return nodo && nodo.edad; 
            });
            if (personas.length > 0) {
                const listaPersonas = personas.join(', ');
                console.log(`Personas que viven en ${nombreCiudad}: ${listaPersonas}`);
            } else {
                console.log(`No hay personas viviendo en ${nombreCiudad}.`);
            }
        } else {
            console.log(`La ciudad ${nombreCiudad} no existe en el en el grafo.`);
        }
    }
}

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Ciudad {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const friendsAndCities = new Graph();

const Bogota = new Ciudad('Bogotá');
const Medellin = new Ciudad('Medellín');
const Cali = new Ciudad('Cali');
const Cartagena = new Ciudad('Cartagena');

const Juan = new Persona('Juan', 30);
const Maria = new Persona('María', 25);
const Pedro = new Persona('Pedro', 28);
const Ana = new Persona('Ana', 35);
const Ramiro = new Persona('Ramiro', 27);

//Se añaden ciudades
friendsAndCities.addNode(Bogota);
friendsAndCities.addNode(Medellin);
friendsAndCities.addNode(Cali);
friendsAndCities.addNode(Cartagena);

//Se añaden amigos
friendsAndCities.addNode(Juan);
friendsAndCities.addNode(Maria);
friendsAndCities.addNode(Pedro);
friendsAndCities.addNode(Ana);
friendsAndCities.addNode(Ramiro);

//Se relacionan los amigos con las ciudades
friendsAndCities.addEdge(Juan, Bogota);
friendsAndCities.addEdge(Maria, Medellin);
friendsAndCities.addEdge(Pedro, Cali);
friendsAndCities.addEdge(Ana, Cartagena);
friendsAndCities.addEdge(Ramiro, Medellin);

//Imprime todo el grafo
friendsAndCities.printGraph();

//Imprime las ciudades donde vive cada persona
friendsAndCities.printFriendsAndCities('Bogotá');
friendsAndCities.printFriendsAndCities('Medellín');
friendsAndCities.printFriendsAndCities('Cali');
friendsAndCities.printFriendsAndCities('Cartagena');

