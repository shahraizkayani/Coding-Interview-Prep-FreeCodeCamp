/*
Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.






*/
function quickSort(array) {
  // change code below this line
  Sort(0,array.length-1);
  function Sort(low,high){
    if(low<high){
      let p = Partition(low,high);
      Sort(low,p-1);
      Sort(p+1,high);
    }

  }

  function Partition(low,high){
   var pivot = array[high];
   let i = low-1;
   for(let j =low;j<=high-1;j++){
     if(array[j] <=pivot){
       i++;
       Swap(i,j);
     }
   }
Swap(i+1,high);
return (i+1);

  }
  function Swap(i,j){
    let k = array[i];
    array[i] = array[j];
    array[j] = k;
  }
  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
