## HTML

- `'aside'`: represents a portions of a document whose content is only indirectly related to the document's main content. Aside are frequently presented as sidebars or call-out boxes. 사이드바 정도로 생각.

## JS

- async/await:
  As 'fetch' api returns promise once it's finished, we have to wait for it to finish

- High order Array method:

  - we can call it on an array
  - forEach():

  ```
      Array.forEach((item, index, entireArray) => {
        ...
        })
  ```

  - map(): loops through an array just like forEach except it returns another array.

  ```
  const arr = [1,2,3,4,5];

  const arr2 = arr.map((item, index, entireArray) => {
      return `Number: ${item}
  });

  console.log(arr2); // Array["Number: 1:", "Number: 2:", "Number: 3:", "Number: 4:", "Number: 5:"]

  ```

  - sort(): ...**built upon converting the elements into strings**.

  ```
  const arr = [1,2,110, 3, 4, 330];

  const sortedArr = arr.sort(); // Array [1, 110, 2, 3, 330, 4]; -> lexical order!

  const sortedArr = arr.sort(function(a, b) {
      return a - b;
  }); // Array [1, 2, 3, 4, 110, 330]; -> numerical ascending order!

  ```

  - filter():

  ```
  const arr = [20, 23, 25, 30, 31, 21, 50, 60];

  const under30 = arr.filter(item => item < 30); // Array[20, 23, 25, 21]
  ```

  - reduce():

  ```
  const arr = [1, 2, 3, 4, 5];

  const total = arr.reduce((acc, num) => (acc + num), 0); // > 15
  const total = arr.reduce((acc, num) => (acc + num), 10); // > 25 // 10 is start number
  ```
