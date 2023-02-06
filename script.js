let arr = [1, 2, 3, 4];

class simplyList {
    constructor(value, next = null, parent = null) {
        this.value = value;
        this.next = next;
        this.parent = parent;
    }
}
class doubleList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        const newNode = new simplyList( value, this.head );

        if( this.head ){
            this.head.parent = newNode;
        }
        this.head = newNode;
        if( !this.tail ) {
            this.tail = newNode;
        }
        return this;
    }
    append(value) {
        const newNode = new simplyList( value );
        if( this.tail ) {
            this.tail.next = newNode;
        }
        newNode.parent = this.tail;
        if( !this.tail ) {
            this.head = newNode;
        }
        this.tail = newNode;
        return this;
    }
    delete( value ) {
        if( !this.head ) {
            return null;
        }
        let currentNode = this.head;
        while(currentNode) {
            if( currentNode.value == value ) {
                if( currentNode === this.head ) {
                    currentNode.next.parent = null;
                    this.head = currentNode.next;
                } else if( currentNode === this.tail ) {

                }

                currentNode.parent.next = currentNode.next;
                currentNode.next.parent = currentNode.parent;
            }
            currentNode = currentNode.next;
        }
        return this;
        
    }
}

let tree = new doubleList();
tree.prepend(2);
tree.append(4);
tree.append(1);
console.log( tree.delete(4));
