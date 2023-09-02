import { MAXIMUM_RESOURCE_VALUE } from '@/constants';

export const numberFormatter = (value: number): string => {
  const fixedLength = 12;

  if (isNaN(value)) return 'NaN'.padEnd(fixedLength, ' ');
  if (Math.abs(value) >= MAXIMUM_RESOURCE_VALUE)
    return 'MAX'.padEnd(fixedLength, ' ');

  if (Number.isInteger(value) && Math.abs(value) < 1000)
    return value.toString().padEnd(fixedLength, ' ');

  const units = ['K', 'M', 'B', 'T', 'Qd', 'Qt', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  let output = '';

  for (let i = units.length - 1; i >= 0; i--) {
    const divisor = Math.pow(10, (i + 1) * 3);
    if (
      Math.abs(value) >= divisor &&
      Math.abs(value) < Math.pow(10, (i + 2) * 3)
    ) {
      output = `${(value / divisor).toFixed(2)}${units[i]}`;
      break;
    }
  }

  if (output === '') output = value.toExponential(2);

  return output.padEnd(fixedLength, ' ');
};
