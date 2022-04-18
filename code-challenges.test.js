// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe("arrayShuffler", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it("removes the first item from the array and shuffles the remaining content.", () => {
      expect(arrayShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(arrayShuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })


//   FAIL  ./code-challenges.test.js
//   arrayShuffler
//     ✕ removes the first item from the array and shuffles the remaining content.

//   ● arrayShuffler › removes the first item from the array and shuffles the remaining content.

//     ReferenceError: arrayShuffler is not defined


// b) Create the function that makes the test pass.
// PSEUDO:
// Create a function called arrayShuffler that takes in an array
// use shift method to remove the first index of the array.
// create a for loop and create a variable called randomNumber and have it equal math.floor times the array length 
// use google to remember how to randomize...found math.random to randomize the array position 
// create another variable called newArray that will be assigned to the index i value



const arrayShuffler = (array) => {
    array.shift()
    for(let i = 0; i < array.length; i++){
      let randomNumber = Math.floor(Math.random() * array.length)
      let newArray = array[i]
      array[i] = array[randomNumber]
      array[randomNumber] = newArray
    }
    return array
  }



//   PASS  ./code-challenges.test.js
//   arrayShuffler
//     ✓ removes the first item from the array and shuffles the remaining content. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// _____________________________________________________________________________________________________












// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


// Expected output: [-8, 90]

// Expected output: [5, 109]

describe("minMax", () => {
    it("takes an array of numbers & returns an array of the minimum and maximum numbers in that order.", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        const nums2 = [109, 5, 9, 67, 8, 24]
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
  })

//   FAIL  ./code-challenges.test.js
//   minMax
//     ✕ takes an array of numbers & returns an array of the minimum and maximum numbers in that order.

//   ● minMax › takes an array of numbers & returns an array of the minimum and maximum numbers in that order.

//     ReferenceError: minMax is not defined


// b) Create the function that makes the test pass.
//PSEUDO:
// Declare a function called minMax 
// parameter will be an array
// hopped into a breakout room with others and found math.min and math.max to use to find the min and max of the array
// use the spread method to convert the array into separate pieces of data so the min an max can be stored as variables
// use .push to push the min and max values into the newArray



const minMax = (array) => {
    let newArray = []
    let min = Math.min(...array)
    let max = Math.max(...array)
    newArray.push(min)
    newArray.push(max)
    return newArray
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// _____________________________________________________________________________________________________












// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.



// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


describe("noDuplicates", () => {
    it("returns one array with no duplicate values.", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
      expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })
//   FAIL  ./code-challenges.test.js
//   noDuplicates
//     ✕ takes an array of numbers & returns an array of the minimum and maximum numbers in that order.

//   ● noDuplicates › takes an array of numbers & returns an array of the minimum and maximum numbers in that order.

//     ReferenceError: noDuplicates is not defined


// b) Create the function that makes the test pass.
//PSEUDO:
// Declare a variable called noDuplicates that will take in array1 and array2 as parameters
// use .concat to join the 2 arrays, so we can use just one array instead of 2 separate ones
// use .filter to and set value and index as the parameters
// use .indexOf and set the value to equal the index which will 
// output will be the final array with no duplicates


const noDuplicates = (array1, array2) => {
  let array3 = array1.concat(array2)
  let finalArray = array3.filter((value,index) => {
      return array3.indexOf(value) ===index
  })
  return finalArray
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total