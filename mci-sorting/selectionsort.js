/**   Bubble Sort 
 *    Insertion Sort
 *  | Selection Sort |
 *    Merge Sort
 *    Quick Sort
 **/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = array[i];
        for (let j = j + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

selectionSort(numbers);