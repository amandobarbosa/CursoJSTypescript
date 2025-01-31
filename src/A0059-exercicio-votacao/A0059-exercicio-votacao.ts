type votationOptions = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: votationOptions[] = [];
  constructor(public details: string) {}
  addVotationOption(votationOption: votationOptions): void {
    this._votationOptions.push(votationOption);
  }
  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }
  get votationOptions(): votationOptions[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];
  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }
  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOptions of votation.votationOptions) {
        console.log(votationOptions.option, votationOptions.numberOfVotes);
        console.log("###");
        console.log('');
        
        
      }
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 });
votation1.vote(1)
votation1.vote(1)
votation1.vote(0)
votation1.vote(0)
votation1.vote(0)

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.showVotations();
