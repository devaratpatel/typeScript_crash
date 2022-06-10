class Invoice {
    constructor(client, _amount, work) {
        this.client = client;
        this._amount = _amount;
        this.work = work;
    }
    format() {
        return `${this.client} owes $${this._amount} for work in ${this.work}`;
    }
}
const invOne = new Invoice('mario', 250, 'selling paintings');
const invTwo = new Invoice('luigi', 7878, 'selling pies');
let invoiceArray = [];
invoiceArray.push(invOne);
invoiceArray.push(invTwo);
console.log(invoiceArray);
export {};
//# sourceMappingURL=classes.js.map