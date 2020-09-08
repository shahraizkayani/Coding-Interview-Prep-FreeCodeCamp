/*
Write an add method that assigns the first node you push to the linked list to the head;
after that, whenever adding a node, every node should be referenced by the previous node's next property.

Note

Your list's length should increase by one every time an element is added to the linked list.





*/
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element,next =null){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
   var temp = new Node(element);
   if(head == null){
     head = temp;
     length++;
   }
else{
     var current = head;
     while(current.next !=null){

     current = current.next;
     }

     current.next = temp;
     length++;

}
    // Only change code above this line
  };
}
