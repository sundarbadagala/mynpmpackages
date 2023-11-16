function _search(data, field, value) {
  return data.filter((item) =>
    item[field]
      ?.toString()
      .toLowerCase()
      .includes(value.toString().toLowerCase())
  );
}

export default _search;
