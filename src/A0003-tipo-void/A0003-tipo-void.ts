function semRetorno(...args: string[]): void{
console.log(args.join(' '))
}

const pessoa = {
    nome: "Amando",
    sobrenome: "Barbosa",

    exibirNome(): void{
        console.log(this.nome + '' + this.sobrenome)
    }
}

semRetorno('Amando', 'barbosa')
console.log(pessoa);
