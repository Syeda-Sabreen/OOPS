class Account {
    acc_Id;
    acc_Name;
    constructor(id, name) {
        this.acc_Id = id;
        this.acc_Name = name;
    }
}
class SavingsAcc extends Account {
    acc_Amount = 0
    min_Bal = 500
    constructor(id, name, amount) {
        super(id, name)
        this.acc_Amount = amount
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}
class CurrentAcc extends Account {
    acc_Amount = 0
    min_Bal = 5000
    constructor(id, name, amount) {
        super(id, name);
        this.acc_Amount = amount
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}

let s1 = new SavingsAcc(101, "varidhi", 252000)
let c1 = new CurrentAcc(102, "sharadhi", 1555000)

console.log(s1)
console.log(s1.get_Bal())

console.log(c1)
console.log(c1.get_Bal())