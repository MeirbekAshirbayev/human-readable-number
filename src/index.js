module.exports = function toReadable(number) {
  const ones = [
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

  const teens = [
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

  const tens = [
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

  if (number === 0) return 'zero';

  let result = '';
  let num = number;

  if (num >= 100) {
    result += `${ones[Math.floor(num / 100)]} hundred`;
    num %= 100;
    if (num !== 0) result += ' ';
  }

  if (num >= 20) {
    result += tens[Math.floor(num / 10)];
    if (num % 10 !== 0) {
      result += ` ${ones[num % 10]}`;
    }
  } else if (num >= 10) {
    result += teens[num - 10];
  } else if (num > 0) {
    result += ones[num];
  }

  return result;
};
