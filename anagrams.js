//Write the code given If two strings are anagrams of one another, then return true.

var firstWord = 'Deepak';
var secondWord = 'Aman';

function isAnagram(one, two) {
  //change both to  lower case for case insensitive;

  var a = one.toLowerCase();
  var b = two.toLoserCase();

  //sort the string, then combine the string to an array;
  a = a.split('').sort().join('');
  b = b.split('').sort().join('');
  return a === b;
}

//Write the code to find the vowels

const findVowels = (str) => {
  let cound = 0;

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      cound++;
    }
  }
  return cound;
};

//object into an array;
let obj = { id: '1', name: 'user22', age: '26', work: 'programmer' };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "work"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "user22r", "26", "programmer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]
