/*

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.


##Algorithms
1-Push items to new array.
2-Use indexOf to check if item exists in inventory.
3-If it exists update its value.
4-else Add item to new inventory. (Make new array as then it make check in loop to avoid duplicates)
5-Merge new inventory with old.


*/
function updateInventory(arr1, arr2) {
   
   if(arr1.length ==0 ){
       return sorting(arr2);
   }
   else if(arr2.length ==0){
       return sorting(arr1);
   }
   
    var arr3 = [];
    for(let i =0;i<arr2.length;i++){

        arr3.push(arr2[i][1]);
    }

  var arr4 =[];
    var count =0;
    for(let i =0;i<arr1.length;i++){
        var values = arr3.indexOf(arr1[i][1]);
        
        if( values !=-1){
                arr1[i][0] += arr2[values][0];
        }
        else{
           
         
           arr4.push(arr2[i]);
        }
    }
   for(let value of arr4){
       arr1.push(value);
   }Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
   
  
 
    return sorting(arr1);;
}

function sorting(arr){

    arr.sort(function(a,b){
         return a[1].charCodeAt(0)-b[1].charCodeAt(0)
});
return arr;
    }

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
