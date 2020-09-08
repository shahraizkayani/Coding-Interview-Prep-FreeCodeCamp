/*
Write a remove method that takes an element and removes it from the linked list.

Note: The length of the list should decrease by one every time an element is removed from the linked list.


*/
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
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
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    // Only change code below this line
    if(head ==null){
      return null;
    }
    else if( head.element == element){
          head = head.next;
        length--;
    }
  
    else{
      var temp = head;
      while(temp.next !=null){
            if(temp.next.element == element){
                temp.next = temp.next.next;
            }
    temp = temp.next;
      }
    }
    // Only change code above this line
  };
}

