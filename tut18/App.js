import React from 'react';

// spread operator
function App()
{
  // Example 1
  const arr1 = ["shailesh", "Indian", "Hindu"];
  const arr2 = [33, 1.109, ...arr1, 9];
  console.log("Arr2: ", arr2);

  // Example 2: concatination of arr1 and arr2
  const arr3 = [...arr1, ...arr2];
  console.log("Arr3: ", arr3);

  // Example 3
  const [first, ...remaining] = arr3;
  console.log("first:", first);
  console.log("remaining:", remaining);

  // Example 4
  const fullName = {
    fname: "shailesh",
    lname: "kumar"
  }
  const obj = {
    id: 1,
    ...fullName,
    age: 20,
    gender: 'male',
  }
  console.log("Arr4: ", obj);

  return (
    <div>

    </div>);
}

export default App;