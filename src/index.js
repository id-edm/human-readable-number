module.exports = function toReadable(number) {
  const ARR_UNITS = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const ARR_TEENS = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const ARR_TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const getUnits = (num) => {
    return ARR_UNITS[num];
  };
  const getTeens = (num) => {
    return ARR_TEENS[num - 10];
  };
  const getTens = (num) => {
    const tensIndex = Math.floor(num / 10);
    const unitsIndex = num % 10;
    let result = ARR_TENS[tensIndex];
    if (unitsIndex !== 0) {
      result = `${result} ${ARR_UNITS[unitsIndex]}`;
    }
    return result;
  };

  const getHundreds = (num) => {
    const hundredsIndex = Math.floor(num / 100);
    const remainder = num % 100;
    let result = `${ARR_UNITS[hundredsIndex]} hundred`;
    if (remainder !== 0) {
      result = `${result} ${toReadable(remainder)}`;
    }
    return result;
  };

  switch (true) {
    case number <= 9:
      return getUnits(number);
    case number <= 19:
      return getTeens(number);
    case number <= 99:
      return getTens(number);
    case number <= 999:
      return getHundreds(number);
    default:
      return '';
  }
};
