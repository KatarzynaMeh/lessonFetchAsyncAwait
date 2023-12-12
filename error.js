// console.log("Start");

// try {
//     console.log('Before error');
//     a++;
//     console.log('After error');
// } catch (error) {
//     console.log(error);
//     console.log('NAME: ', error.name);
//     console.log('MASSAGE: ', error.message);
//     console.log('STACK: ', error.stack);
// }

// console.log("End");

// const str = '1111';
// // console.log([...str]);
// const num = 1111;

// function toArray(data) {
//     try {
//         return [...data]
//     } catch (error) {
//         // console.log(error);
//         return [];
//     }
// }

// console.log(toArray(str));
// console.log(toArray(num));
// console.log('After');

// const root = document.querySelector('#root');
// console.log(root.innerText);

// const rooot = document.querySelector('#rooot');
// console.log(rooot.innerText);

// function getElementText(selector) {
//     try {
//         const element = document.querySelector(selector);
//          return element.innerText;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }
// console.log(getElementText('#root'));
// console.log(getElementText('#rooot'));
// console.log('After');

// function devide(firstNumber, secondNumber) {
//     if (secondNumber === 0)
//         return 'You cannot divide by 0';

//     return firstNumber / secondNumber;
// }
// console.log(devide(10, 2));
// console.log(devide(10, 0));

// function devide(firstNumber, secondNumber) {
//     if (secondNumber === 0) throw new Error("You cannot divide by 0");

//   return firstNumber / secondNumber;
// }

// try {
//     console.log(devide(10, 0));
// } catch (error) {
//     console.log(error.message);
// }

const asyncAwait = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!response.ok) {
      throw new Error("Post not found");
    }
    // console.log(responce.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
console.log(!true);
console.log(!false);
// asyncAwait(1);
asyncAwait(1000);

const myUser = async (id, callback) => {
  try {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      if (!response.ok) throw new Error ('User not found')
    const data = await response.json();
    callback(data);
  } catch (error) {
      console.log(error);
      const errorElement = document.createElement('h1');
      errorElement.innerText = error.message;
      document.body.append(errorElement);
  }
};

myUser(200);
