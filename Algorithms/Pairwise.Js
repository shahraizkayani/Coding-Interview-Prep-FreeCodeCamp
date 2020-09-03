/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.




*/
function pairwise(arr, arg) {
  if(arr.length ==0) return 0;
  var arr2 =[];
  for(let i =0;i<arr.length-1;i++){
   for(let j =i+1;j<arr.length;j++){
     if(arr2.includes(i) ){
       break;
     }
     if(arr2.includes(j)){
       continue;
     }
    if(arr[i] + arr[j] ==arg){
      
      arr2.push(i);
      arr2.push(j);
      break;
    }
   }
  }
  return arr2.reduce((a, b) => a + b, 0);
 
}

pairwise([1, 1, 1], 2);
