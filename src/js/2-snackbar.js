import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const delay = Number(data.get('delay'));
  const state = data.get('state');

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
        timeout: 3000,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
        timeout: 3000,
      });
    });
  form.reset();
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
