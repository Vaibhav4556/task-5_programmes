// a) Print odd numbers in an array

function getOddNumbers() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}
getOddNumbers();

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = arr.filter((num) => num % 2 !== 0);

console.log(result);

// b) Convert all the strings to title caps in a string array

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].toUpperCase();
  }
  return str.join(" ");
}
console.log(titleCase("vaibhav"));

// Sum of all numbers in an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = arr.reduce(function (x, y) {
  return x + y;
}, 0);

console.log(sum);

// Return all the prime numbers in an array

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
function isPrime(num) {
  if (num < 2) return false;

  for (let k = 2; k < num; k++) {
    if (num % k == 0) {
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

// Return all the palindromes in an array

const arr = ["carecar", 1344, 12321, "16461", "civic", "cannot"];
const isPalindrome = (el) => {
  const str = String(el);
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
const findPalindrome = (arr) => {
  return arr.filter((el) => isPalindrome(el));
};
console.log(findPalindrome(arr));

// Return median of two sorted arrays of the same size.

function getMedian(ar1, ar2, n) {
  let j = 0;
  let i = n - 1;
  while (ar1[i] > ar2[j] && j < n && i > -1) {
    let temp = ar1[i];
    ar1[i] = ar2[j];
    ar2[j] = temp;
    i--;
    j++;
  }
  ar1.sort(function (a, b) {
    return a - b;
  });
  ar2.sort(function (a, b) {
    return a - b;
  });
  return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
}

let ar1 = [1, 12, 22, 26, 54];
let ar2 = [2, 3, 17, 30, 98];

let n1 = 5;
let n2 = 5;
if (n1 == n2) console.log("Median is " + getMedian(ar1, ar2, n1));

// Remove duplicates from an array

var arr = ["apple", "mango", "apple", "orange", "mango", "mango", "guava"];

function removeDuplicates(arr) {
  var unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates(arr));

// Rotate an array by k times
function RightRotate(a, n, k) {
  // If rotation is greater
  // than size of array
  k = k % n;

  for (let i = 0; i < n; i++) {
    if (i < k) {
      // Printing rightmost
      // kth elements
      console.log(a[n + i - k] + " ");
    } else {
      // Prints array after
      // 'k' elements
      console.log(a[i - k] + " ");
    }
  }
}

// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;

RightRotate(Array, N, K);
