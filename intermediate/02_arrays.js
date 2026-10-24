// This video from Chai aur Code discusses various JavaScript Array methods.
// The code examples are designed to illustrate their usage and differences.

// --- 1. Array Initialization ---
// Marvel Heroes array [03:08]
const marvel_heroes = ["thor", "Ironman", "spiderman"]; 
// DC Heroes array [03:35]
const dc_heroes = ["superman", "flash", "batman"];

// --- 2. Combining Arrays ---

// 2.1. Using `push()` [03:54]
// Adds elements to the end of an existing array.
// When an array is pushed, it's added as a single, nested element.
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); 
// Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// To access a nested element, e.g., "flash": marvel_heroes[3][1] [05:16]

// 2.2. Using `concat()` [05:49]
// Merges two or more arrays. It returns a new array and does not modify existing arrays [07:02].
const all_heroes_concat = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes_concat);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// 2.3. Using the Spread Operator (`...`) [07:52]
// A modern and often preferred method for merging arrays.
// It "spreads" out the elements of arrays into a new array.
const all_heroes_spread = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes_spread);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// --- 3. Flattening Nested Arrays ---

// Example of a deeply nested array [09:16]
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Using `flat()` to flatten the array [10:33]
// `flat(depth)` takes an argument for the depth to flatten.
// `Infinity` can be used to flatten all nested arrays regardless of depth [11:06].
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// --- 4. Utility Array Methods ---

// 4.1. `Array.isArray()` [11:57]
// Checks if a given value is an array. Returns `true` or `false`.
// console.log(Array.isArray("Hitesh")); // Output: false

// 4.2. `Array.from()` [12:29]
// Creates a new, shallow-copied `Array` instance from an iterable or array-like object.
// console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"]

// Interesting case with objects [13:01]
// `Array.from()` might return an empty array if it cannot directly convert the object.
const obj = { name: "Hitesh" };
// console.log(Array.from(obj)); // Output: []
// To convert object keys or values specifically:
// console.log(Array.from(Object.keys(obj))); // Output: ["name"]
// console.log(Array.from(Object.values(obj))); // Output: ["Hitesh"]

// 4.3. `Array.of()` [14:24]
// Creates a new `Array` instance from a variable number of arguments.
// It can convert multiple variables/elements into a single array.
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]