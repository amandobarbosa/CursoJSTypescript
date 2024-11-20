const body = document.querySelector('body');
if (body) body.style.background = 'red';

const body2 = document.querySelector('body')!;
if (body2) body2.style.background = 'red';

const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

const input = document.querySelector('.input') as HTMLInputElement
input.value = 'QUalquer coisa'
input.focus()