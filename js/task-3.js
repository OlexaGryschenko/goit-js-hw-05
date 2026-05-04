function getElementWidth(content, padding, border) {
  const indexNumContent = content.indexOf('px');
  const indexNumPadding = padding.indexOf('px');
  const indexNumBorder = border.indexOf('px');

  const numContent = content.slice(0, indexNumContent);

  const numPadding = padding.slice(0, indexNumPadding);

  const numBorder = border.slice(0, indexNumBorder);

  return Number(numContent) + Number(numPadding) * 2 + Number(numBorder) * 2;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
