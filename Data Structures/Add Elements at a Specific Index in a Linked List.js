/*
Create an addAt(index,element) method that adds an element at a given index. Return false if an element could not be added.
Note: Remember to check if the given index is a negative or is longer than the length of the linked list.



*/
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(index,element){
  
  if(index ==-1 || index >length){

      return false;

  }
   var node = new Node(element);
    if(index ==0){

       node.next = head;

        head = node;

        length++;
      

    }
else{
 var temp = head;
                let i = 0;
                while (i != index-1)
                {
                    temp = temp.next;
                    i++;
                }
                node.next = temp.next;
                temp.next = node;
            length++;

}
  }
  // Only change code above this line
}
