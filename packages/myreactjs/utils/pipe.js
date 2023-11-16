const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => {
      try {
        return fn(prev);
      } catch (error) {
        throw new Error(error);
      }
    }, val);

    export default pipe