const Account = function (name, email) {
    this.name = name;
    this.email = email;
}

Account.prototype.getInfo = function () {
    console.log(`login: ${this.name} email: ${this.email}`);
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com