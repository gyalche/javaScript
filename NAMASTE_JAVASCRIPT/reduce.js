const arr = [1, 2, 3, 4, 5];

//max number
const output = arr.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(output);

//sorting;
const sorting = arr.sort((a, b) => {
  return b - a;
});
console.log(sorting);

//max;
function max() {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > ans) {
      ans = arr[i];
    }
  }
  return ans;
}
console.log(max());

const total = arr.reduce((a, b) => {
  return a + b;
}, 0);

console.log('using reduce', total);

const user = [
  { userName: 'dawa', age: 26 },
  { userName: 'dawa', age: 75 },
  { userName: 'dawa', age: 50 },
  { userName: 'dawa', age: 26 },
  { userName: 'dawa', age: 75 },
];

//find=> acc{26:2, 75:1, 50:1}
const find = user.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

//finding all the userName whos age is less thean 75 using reduce;
const rfind = user.reduce((acc, curr) => {
  if (acc[curr.age > 75]) {
    // acc[curr.userName] = acc[curr.userName];
    acc[curr.userName];
  } else {
    console.log('unable to find');
  }
  return acc;
}, []);

console.log(rfind);

//filter;
const fil = user.filter((x) => x.age < 65).map((m) => m.userName);
console.log(fil);
