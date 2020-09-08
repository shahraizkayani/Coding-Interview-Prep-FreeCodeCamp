/*
Write a removeAt(index) method that removes and returns a node at a given index.
The method should return null if the given index is either negative, or greater than or equal to the length of the linked list.

Note: Remember to keep count of the currentIndex.



*/
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
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

  // Only change code below this line
this.removeAt = function(index){

       if(index == -1 || index == length )
        {

          return null;
        }
         if(head ==null){
      return null;
    }
    else if( index ==0){
      var temp = head;
          head = head.next;
        length--;
        return temp.element;
    }
  
    else{
      var temp = head;
      let count =0;
      while(temp.next !=null){
            if(count == index-1){
              var nodes = temp.next;
                temp.next = temp.next.next;
                length--;
                return nodes.element;
            }
            count++;
    temp = temp.next;
      }
    }
        

}
  // Only change code above this line
}
