class Node {
    constructor(fullname, birthday) {
        this.fullname = fullname;
        this.birthday = birthday;
        this.left = null;
        this.right = null;
    }

    isLeaf() {
        return !this.left && !this.right;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(fullname, birthday) {
        const newNode = new Node(fullname, birthday);

        if(!this.root){
            this.root = newNode;
        }else{
            let current = this.root;
            let isFound = false;

            while(!isFound){
                if(current.fullname === fullname){
                    isFound = true;
                    return null;
                }
                if(current.birthday > birthday){

                    if(!current.left){
                        current.left = newNode;
                        isFound = true;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else{
                    if(!current.right){
                        current.right = newNode;
                        isFound = true;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }

        }
    }

    preOrder(node = this.root){
        if(!node){
            return;
        }
        console.log(`${node.fullname} - ${node.birthday}`);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node = this.root){
        if(!node){
            return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(`${node.fullname} - ${node.birthday}`);
    }

    inOrder(node = this.root){
        if(!node){
            return;
        }
        this.inOrder(node.left);
        console.log(`${node.fullname} - ${node.birthday}`);
        this.inOrder(node.right);
    }

}

const familyTree = new BinaryTree();

familyTree.insert("Abuelo", "01-01-1940");
familyTree.insert("Madre", "15-06-1965");
familyTree.insert("Tío", "20-09-1968");
familyTree.insert("Yo", "10-11-1995");
familyTree.insert("Hermano", "05-05-1994");
familyTree.insert("Primo 1", "12-03-2000");
familyTree.insert("Primo 2", "30-07-1992");

familyTree.preOrder();
familyTree.postOrder();
familyTree.inOrder();
