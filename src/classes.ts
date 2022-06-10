class Invoice {
  constructor(public readonly client: string, private _amount: number, public work: string) {
    // this.client = client;
    // this.amount = amount;
    // this.work = work;
  }
  nickname?: string;
  // client: string;
  // amount: number;
  // work: string;
  // instead of writing the properties we can just use access modiefiers like public & private in the constructor to    skip this step

  format() {
    return `${this.client} owes $${this._amount} for work in ${this.work}`;
  }
}

const invOne = new Invoice('mario', 250, 'selling paintings');
const invTwo = new Invoice('luigi', 7_878, 'selling pies');

let invoiceArray: Invoice[] = [];
invoiceArray.push(invOne);
invoiceArray.push(invTwo);
console.log(invoiceArray);

export {};
