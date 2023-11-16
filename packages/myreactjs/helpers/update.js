function _update(data, reqBody, field) {
  const isAlreadyExist = data.some((item) => item[field] === reqBody[field]);
  if (isAlreadyExist) {
    return data.map((item) => {
      if (item[field] === reqBody[field]) {
        return { ...item, ...reqBody };
      }
      return item;
    });
  } else {
    return [...data, reqBody];
  }
}

export default _update;
