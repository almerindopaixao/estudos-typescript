/* Recomendado */

// Condicional
const body1 = window.document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type Assertion
const body3 = window.document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Valor';
input.getAttribute('class');

/* Não Recomendado */

// No-null assertiond(!)
const body2 = window.document.querySelector('body')!;
body2.style.background = 'red';

const body4 = (window.document.querySelector('body') as unknown) as number;

body4.toFixed(4);
