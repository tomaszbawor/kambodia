export const numberFormatter = (value: number): string => {
  const fixedLength = 12; // Set a constant length for the output string

  if (isNaN(value)) return 'NaN'.padEnd(fixedLength, ' ');
  if (Math.abs(value) >= Number.MAX_VALUE)
    return 'MAX'.padEnd(fixedLength, ' ');

  // For simple numbers that don't require scientific notation or unit labels
  if (Number.isInteger(value) && value < 1000)
    return value.toString().padEnd(fixedLength, ' ');

  const units = ['K', 'M', 'B', 'T', 'Qd', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  let output = '';

  for (let i = units.length - 1; i >= 0; i--) {
    const divisor = Math.pow(10, (i + 1) * 3);

    if (
      Math.abs(value) >= divisor &&
      Math.abs(value) < Math.pow(10, (i + 2) * 3)
    ) {
      const quotient = value / divisor;
      output = `${quotient.toFixed(2)}${units[i]}`;
      break;
    }
  }

  // Use exponential notation for numbers too large for unit labels
  if (output === '') {
    output = value.toExponential(2); // 2 digits after the decimal point in exponential notation
  }

  return output.padEnd(fixedLength, ' ');
};
