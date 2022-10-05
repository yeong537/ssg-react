export const loop = (callback, repeatCount = 10) => {
  Array(repeatCount).fill(null).forEach(callback);
};
