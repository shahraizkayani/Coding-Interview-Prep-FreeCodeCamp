/*
Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.






*/
function selectionSort(array) {

    for (let k = 0; k < array.length; k++) {
        let min = array[k];
        var max = 0;
        for (let i = k + 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
                max = i;
            }

        }
        if (array[k] != min) {
            var temp = array[k];
            array[k] = min;
            array[max] = temp;
        }
    }
  
    return array;
    // change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
