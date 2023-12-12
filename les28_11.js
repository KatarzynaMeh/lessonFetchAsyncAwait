const prom1 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => resolve("success"), 1000);
  } else {
    setTimeout(() => reject("error"), 1000);
  }
});
prom1
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("After all"));

const mySuccess = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 500);
});
// mySuccess.then((result) => console.log(result));
const secondPromise2 = new Promise((resolve) => resolve(2));

// Promise.all([mySuccess, secondPromise2, prom1])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("after all 20"));



const firstPromise = new Promise((resolve) => setTimeout(() => resolve('success500'), 0))
const secondPromise = new Promise((resolve, reject) => reject(2))
// выводит первый выполненный (или успешно или отрицательно)
Promise.race([firstPromise, secondPromise])
  .then((result) => console.log('race', result))
  .catch((error) => console.log('error', error))
// первый УСПЕШНЫЙ результат
Promise.any([firstPromise, secondPromise])
  .then((result) => console.log('any', result))
  .catch((error) => console.log('error', error))


  