class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.candidate = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.number = Math.round((this.min + this.max) / 2);
        return this.number;
    }

    lower() {
        this.max = this.number;
    }

    greater() {
        this.min = this.number;
    }
}

module.exports = GuessingGame;