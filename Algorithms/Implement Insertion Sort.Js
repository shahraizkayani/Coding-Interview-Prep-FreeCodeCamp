/*


Write a function insertionSort which takes an array of integers as input
and returns an array of these integers in sorted order from least to greatest.



*/
function insertionSort(array) {
    // change code below this line

    for (let i = 1; i < array.length; i++) {
        let j = i;
        let element = array[i];
        for (let k = i - 1; k >= 0; k--) {
            if (array[j] < array[k]) {

                let temp = array[j];
                array[j] = array[k];
                array[k] = temp;
                j--;


            }

        }

    }

    return array;
    // change code above this line
}


insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
