/*

We've provided a Node object and started our DoublyLinkedList.
Let's add two methods to our doubly linked list called add and remove. 
The add method should add the given element to the list while the remove method should remove all occurrences of a given element in the list.

Be careful to handle any possible edge cases when writing these methods, such as deletions for the first or last element. 
Also, removing any item on an empty list should return null.





*/

var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    // change code below this line

    this.add = function(data) {

        let node = new Node(data, null);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node  ;
        return;

    }



    this.remove = function(val) {
        console.log(this.head);
        if (this.head == null) {
            return this.head;
        }
        while (this.head != null) {
            if (this.head.data == val) {
                this.head = this.head.next;
            } else {
                break;
            }
        }
        if (this.head == null) {
            this.tail = null;
            return;
        }

        var temp = this.head;
        while (temp.next != null) {
            if (temp.next.data == val) {
                temp.next = temp.next.next;
                if (temp.next)
                    temp.next.prev = temp;
            } else {
                temp = temp.next;
            }
        }


        this.tail = temp;
        if (temp.data == val) {

            var lastnode = temp.prev;
            lastnode.next = null;
            this.tail = lastnode.prev;


        }

    }
    // change code above this line
};
