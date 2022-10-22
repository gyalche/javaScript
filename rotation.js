//Given the following array: [2,3,4,5,7]
//Perform 3 right rotations:
//First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

//return [4,5,7,2,3]

function rotationRight(arr, rotation) {
  if (rotation === 0) return arr;
  for (let i = 0; i < rotation; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}

rotationRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
rotationRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]
