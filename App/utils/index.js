function dataFormatter(data) {
  return data.map((item, index) => {
    return { id: item.id, key: index.toString(), name: item.employee_name };
  });
}

export { dataFormatter };
