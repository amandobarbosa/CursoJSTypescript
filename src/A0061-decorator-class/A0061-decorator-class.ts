export class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string
    constructor(...args: any[]) {
      super(...args);
      this.cor = 'qualquer coisa'
    }
  };
}

const AnimalDecorated = decorator(Animal);
// const annimal = new Animal('verde');
const animal = new AnimalDecorated('verde');
console.log(animal);
