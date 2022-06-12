const getTextWidth = (str, fontSize) => {
  let result = 0;
  let ele = document.createElement("div");
  ele.style.position = "absolute";
  ele.style.whiteSpace = "nowrap";
  ele.style.fontSize = fontSize;
  ele.style.opacity = 0;
  ele.style.fontWeight = 700;
  ele.innerText = str;
  document.body.append(ele);
  result = ele.getBoundingClientRect().width;
  document.body.removeChild(ele);
  return result;
};
const addMinWidth = (fields) => {
  return fields.map((item) => {
    let placeWith = 40;
    if (item.editable) placeWith = 60;
    const minWidth = item.headerName.length
      ? getTextWidth(item.headerName, 14) + placeWith
      : 100;
    return {
      ...item,
      minWidth,
    };
  });
};

export function transform2ColumnDefs(fields) {
  const withMinWidth = addMinWidth(fields);
  return withMinWidth;
}
