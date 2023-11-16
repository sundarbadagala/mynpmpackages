function debounce(fn, delay) {
  delay = delay || 400;
  let timer;
  return function () {
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export default debounce;
