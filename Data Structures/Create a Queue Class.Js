/*
Write an enqueue method that pushes an element to the tail of the queue, 
a dequeue method that removes and returns the front element, 
a front method that lets us see the front element,
a size method that shows the length, 
and an isEmpty method to check if the queue is empty.




*/
function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
 
    // Only change code below this line
    this.size = function() {
        return collection.length;
    };
    this.enqueue = function(num) {
        let i = collection.length;
        collection[i] = num;
    };

    this.dequeue = function() {
        let element = this.front();
      collection.unshift();
        return element;
    };

    this.front = function() {

        if (collection.length > 0) {
            return collection[0];
        }
    };

    this.isEmpty = function() {

        return collection.length === 0;

    };
    // Only change code above this line
}

