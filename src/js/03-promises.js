// import Notiflix from 'notiflix';
// const [delayInput, stepInput, amountInput] = document.getElementsByTagName('input');
// const form = document.querySelector('.form');
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(delayInput.value,stepInput.value).then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });



// function loop() {
//   for (let i = 0; i < amountInput; i++) {
//     createPromise(position, delay);
//   }
// };

// form.addEventListener("submit", loop);


import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const [delay, step, amount] = document.getElementsByTagName('input');
const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
         resolve({ position, delay });
      } else {
         reject({ position, delay });
      }
    }, delay)
  })
}





form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (let i = 0; i < amount.valueAsNumber; i++) {
    const promiseDelay = delay.valueAsNumber + i * step.valueAsNumber;
    createPromise(i + 1, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };

})

