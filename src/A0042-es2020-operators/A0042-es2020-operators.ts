// Encadeamento opcional e Operador de coalescência nula

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Ixi não existe data');
console.log(undefined ?? 'Ixi não existe data-2');
console.log(null ?? 'Ixi não existe data-3');
console.log(false ?? 'Ixi não existe data-4');
console.log(0 ?? 'Ixi não existe data-5');
console.log('' ?? 'Ixi não existe data-6');
