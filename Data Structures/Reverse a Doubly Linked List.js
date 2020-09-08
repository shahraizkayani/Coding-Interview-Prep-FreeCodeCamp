/*
Let's create one more method for our doubly linked list called reverse which reverses the list in place.
Once the method is executed the head should point to the previous tail and the tail should point to the previous head. 
Now, if we traverse the list from head to tail we should meet the nodes in a reverse order compared to the original list. 
Trying to reverse an empty list should return null.





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
  this.reverse = function(){
  
  
    if (this.head == null)
            {
                return null;
            }

            if (this.head.next == null)
            {

                return this.head;
            }
this.tail = this.head;


     var previousnode = new Node(null,null,null);
      var currentnode =this.head; 
       var nextnode =this.head;         


            
            while (nextnode != null)

            {
                nextnode = nextnode.next;   
                currentnode.next = previousnode; 
                currentnode.prev = nextnode;
                previousnode = currentnode;
                currentnode = nextnode;



            }

            this.head = previousnode;
       
            return this.head;
        }



  // change code above this line
};
