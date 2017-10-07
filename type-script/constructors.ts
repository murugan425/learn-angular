class Business {
    name: string;
    qp1: number;
    qp2: number;
    qp3: number;
    qp4: number;
    annualProfit: number;

    // ? - makes the parameter optional. 
    // we can create a object even without passing this parameter in constructor
    constructor(qp1?: number, qp2?: number, qp3?: number, qp4?: number) {
        this.qp1 = qp1;
        this.qp2 = qp2;
        this.qp3 = qp3;
        this.qp4 = qp4;
    }

    printAvgProfit() {console.log((this.qp1 + this.qp2 + this.qp3 + this.qp4) / 4); }
}

let userProfile = new Business(10, 20, 40, 10);
userProfile.name = 'Murugan';

userProfile.printAvgProfit();



