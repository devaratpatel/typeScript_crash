class Invoice {
  client: string;
  amount: number;
  work: string;

  constructor(client: string, amount: number, work: string) {
    this.client = client;
    this.amount = amount;
    this.work = work;
  }

  format() {
    return `${this.client} owes $${this.amount} for work in ${this.work}`;
  }
}

const invOne = new Invoice('mario', 250, 'selling paintings');

console.log(invOne);

export {};
