class Account {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}

	deposit(amount) {
		this.balance += amount;
	}
}


class SavingsAccount extends Account {
	addInterest() {
		this.balance += this.balance * 0.1;
	}
}

const acc = new SavingsAccount("Promise", 1000);
acc.addInterest();
console.log(acc.balance);
