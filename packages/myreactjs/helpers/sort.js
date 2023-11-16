function _sort(data, field, order = 1) {
  data = JSON.parse(JSON.stringify(data));
  const sortedData = [...data].sort((a, b) => {
    let a1 = a[field];
    let b1 = b[field];
    if (a1 > b1) {
      return order ? 1 : -1;
    } else if (a1 < b1) {
      return order ? -1 : 1;
    } else {
      return 0;
    }
  });
  return sortedData;
}

export default _sort;
