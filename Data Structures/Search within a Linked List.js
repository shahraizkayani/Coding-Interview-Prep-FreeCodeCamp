/*
Let's add a few more useful methods to our linked list class. 
Wouldn't it be useful if we could tell if our list was empty or not, as with our Stack and Queue classes?

We should also be able to find specific elements in our linked list.
Traversing through data structures is something you'll want to get a lot of practice with!
Let's create an indexOf method that takes an element as an argument, and returns that element's index in the linked list. 
If the element is not found in the linked list, return -1.

Let's also implement a method that does the opposite: an elementAt method that takes an index as an argument and returns the element at the given index. 
If no element is found, return undefined.

Write an isEmpty method that checks if the linked list is empty, an indexOf method that returns the index of a given element, 
and an elementAt that returns an element at a given index.




*/
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
   this.isEmpty = function(){

     return length ==0;
   }
   this.indexOf = function(element){

     if(head ==null){
       return -1;
     }
     var temp = head;
     let count =0;
     while(temp !=null){
       if(temp.element ==element)
        {
          return count;
        }
        temp = temp.next;
        count++;
     }

     return -1;
   }

    this.elementAt = function(index){

     if(head ==null){
       return undefined;
     }
     var temp = head;
     let count =0;
     while(temp !=null){
       if(count ==index)
        {
          return temp.element;
        }
        temp = temp.next;
        count++;
     }

     return undefined;
   }
  // Only change code above this line
}
