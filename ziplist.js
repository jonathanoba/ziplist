
const example1 = ['a', 'b', 'c'];
const example2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const newList = [];
  for (let i = 0; i < arr1.length; i++) {
    newList.push(arr1[i], arr2[i]);
  }
  return newList;
}

console.log(zipList(example1, example2));

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(example1, example2));
