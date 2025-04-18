type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

const arrray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrrayFiltradoOriginal = arrray.filter((value) => value < 5);
console.log(arrrayFiltradoOriginal);

const arrrayFiltrado = meuFilter(arrray, (value) => value < 5);
console.log(arrrayFiltrado);
