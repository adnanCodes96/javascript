'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1999));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what we do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }

//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now recive 2 arrays of temps

// 1) Understanding the problrm
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }

//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX BUG
//     value: Number(prompt('Degrees celsius')),
//   };

//   // B) FIND BUG
//   console.log(measurement);

//   console.table(measurement);

//   //console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY BUG
// console.log(measureKelvin());

//Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }

//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

// Challenge

let temp1 = [17, 21, 23];
let temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} in ${i + 1} days ...`;
  }

  console.log('... ' + str);
};

printForecast(temp1);
printForecast(temp2);
