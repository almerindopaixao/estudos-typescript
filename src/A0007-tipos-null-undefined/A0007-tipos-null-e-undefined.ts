let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squereOf(x: any) {
  if (typeof x === 'number') return x;
  return null;
}

const squereOfTwoNumber = squereOf(5);
// const squareOfTwoString = squereOf('5');

if (squereOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squereOfTwoNumber);
}
