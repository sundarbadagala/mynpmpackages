function _replace(data, key, oldValue, newValue) {
  return data.map((item) => {
    if (item[key] === oldValue) {
      return { ...item, [key]: newValue };
    }
    return item;
  });
}

export default _replace;
