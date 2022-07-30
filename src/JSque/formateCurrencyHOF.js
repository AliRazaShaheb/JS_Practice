const currencyFormaterHOF = (currencySymbol, separator) => {
  return (value) => {
    const wholeIntiger = value / 100;
    const digitAfterSeprator = value % 100;
    return `${currencySymbol}${wholeIntiger}${separator}${digitAfterSeprator}`;
  };
};

let formateInCurr = currencyFormaterHOF("$", ".");
console.log(formateInCurr(9999));
