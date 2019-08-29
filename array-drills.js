//1. Implement an Array class from scratch.
//2. Explore the push() method
    //What is the length, capacity and memory address of your array?
        //length: 1, capacity: 3, address: 0
    //What is the length, capacity and memory address of your array? (After adding new items)
        //length: 6, capacity: 12, address: 3
        //On adding the 4th item, condition is met to resize/reallocate memory.
        //Array is resized to a capacity of 12 ((length of 3 + 1) * 3)
        //Head was set to 3 (1st open position after array of 3 items) when last allocation happened
//3. Explore the pop() method
    //What is the length, capacity, and address of your array?
        //length: 3, capacity: 12, address: 3
        //Length is reduced by pop but capacity and address stay the same, now there are 9 slots of the 12 that are free
//4. Understanding more about how arrays work
    //Print this 1 item that you just added. What is the result? Can you explain your result?
        //NaN - 'Memory' is allocated as a Float64Array so a string cannot be added
    //What is the purpose of the _resize() function in your Array class?
        //To increase the size of the array when it is at capacity by some factor, to allow more open memory for items to be added

//5. URLify a string

    function urlify(string) {
        let newString = [];
        for (let i = 0; i < string.length; i++) {
            if (string[i] === ' ') {
                newString.push('%20')
            }
            else {
                newString.push(string.charAt(i))
            }
        }
        return newString.join('');
    }

    console.log(urlify('I cannot type a URL correctly'))

//6. Filtering an array

    function filter(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 5) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    console.log(filter([2, 3, 1, 12, 9, 5]));

//7. Max sum in the array - prompt doesn't specify whether sequence must start at the beginning of the array?
    
    function maxSum(arr) {
        let currentSum = 0;
        let maxSum = 0;
        for (let i = 0; i < arr.length; i++) {
            currentSum += arr[i];
            if (currentSum > currentSum + arr[i + 1]) {
                maxSum = currentSum;
            }
        }
        return maxSum;
    }

    console.log(maxSum([-1, 4, 6, -3, 5, -2, 1]))

//8. Merge arrays

    function merge(arr1, arr2) {
        let newArr = [];
        let index1 = 0;
        let index2 = 0;
        let newIndex = 0;

        while (newIndex < (arr1.length + arr2.length)) {
            let arr1empty = index1 >= arr1.length;
            let arr2empty = index2 >= arr2.length;

            if (!arr1empty && (arr2empty || (arr1[index1] < arr2[index2]))) {
                newArr.push(arr1[index1]);
                index1++;
            } else {
                newArr.push(arr2[index2]);
                index2++
            }
            newIndex++;
        }
        return newArr;
    }
    const arrA = [1, 3, 6, 8, 11];
    const arrB = [2, 3, 5, 8, 9, 10];

    console.log(merge(arrA, arrB));

//9. Remove characters

    function remove(str, chars) {
        let newStr = '';
        let lowerStr = str.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            let match = false;
            for (let j = 0; j < chars.length; j++) {
                if (lowerStr.charAt(i) === chars.charAt(j)) {
                    match = !match;
                }
            }
            if (match === false) {
                newStr += str.charAt(i);
            }
        }
        return newStr;
    }

    console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//10. Products

    function findProducts(arr) {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            product = arr[i] * product;
        }
        let products = [];
        for (let j = 0; j < arr.length; j++) {
            products.push(product/arr[j]);
        }
        return products;
    }

    console.log(findProducts([1, 3, 9, 4]));

//11. 2D array

    function convertArray(arr) {
        let rows = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes(0)) {
                rows.push(i);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                if (arr[i][j] === 0) {
                    arr.forEach((item) => {
                        item[j] = 0;
                    });
                }
            }
        }
        const setRows = new Set(rows);
        const uniqueRows = [...setRows];
        for (let k = 0; k < uniqueRows.length; k++) {
            currentRow = uniqueRows[k];
            arr[currentRow].forEach((item, index) => {
                arr[currentRow][index] = 0;
            })
        }
        return arr;
    }

    let sample = [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]];

    console.log(convertArray(sample));

//12. String rotation

    function stringRotate(str1, str2) {
        str1 = str1.split('');
        str2 = str2.split('');
        let isRotation = false;

        for (let i = 0; i < str1.length; i++) {
            let first = str1.shift();
            str1.push(first);
            if (str1.join('') === str2.join('')) {
                isRotation = true;
            }
        }
        return isRotation;
    }

    console.log(stringRotate('amazon', 'azonma'));
    console.log(stringRotate('amazon', 'azonam'));