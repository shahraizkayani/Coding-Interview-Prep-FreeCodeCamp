/*
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements.
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])

function sym() {
    var arraylist = Array.from(arguments);
    var arr = [];
    for (let i = 0; i < arraylist.length; i++) {
        if (arraylist.length > 1) {
            arr = diff(arraylist[0], arraylist[1]);

        } else {
            break;
        }
        i = 0;
        arraylist.shift();
        arraylist[0] = arr;
    }

    arraylist = arraylist.flat();
    return arraylist;
}

//Find Intersection of two arrays and then subtract intersection from merged array(array1,array2) 

function diff(array1, array2) {
    var arr = [];
    var newarr = new Set();
    var bigarray = [array1, array2]
    var max = Math.max(array1.length, array2.length);
    for (let i = 0; i < max; i++) {
        if (array1.includes(array2[i])) {
            arr.push(array2[i]);
        }
    }
    bigarray = bigarray.flat();
    for (let i = 0; i < bigarray.length; i++) {
        if (arr.includes(bigarray[i])) {
            continue;
        }
        newarr.add(bigarray[i]);

    }

    return Array.from(newarr).sort();
}
