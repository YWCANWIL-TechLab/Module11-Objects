export class Pug {
    constructor(first, last, age, ugly, mouthBreather) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.ugly = ugly;
        this.mouthBreather = mouthBreather;
    }

    breathHeavy() {
        return "*breathing but at airplane volume*";
    }

}

const pug1 = new Pug("uggers", "mcuggerton", 1, true, true);