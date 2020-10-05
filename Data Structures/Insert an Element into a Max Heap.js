var MaxHeap = function() {
 var collection = [];
 this.insert = function(number){
   collection.push(number);
   let i = collection.length;
   while(i >1){
     let parent = Math.floor(i/2);
     if(collection[parent-1] < collection[i-1]){
       [collection[parent-1],collection[i-1]] =  [collection[i-1],collection[parent-1]];
       i =parent;
     }
     else{
       return;
     }
   }
 }
 this.print = function(){
   return collection;
 }
};
