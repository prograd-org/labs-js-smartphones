class SmartPhone {
    constructor(ram, batteryPower, price) {
        this.ram = ram;
        this.batteryPower = batteryPower;
        this.price = price;
    }

    displayFeatures() {
        return `${this.ram}\n${this.batteryPower}\n${this.price}`;
    }
    remainingAmount(priceIHave) {
        this.price = this.price - priceIHave;

        //this one wrong case as per the testcase it should be reverse
    }
}

// AndroidPhone
class AndroidPhone extends SmartPhone {
    constructor(modelName, ram, batteryPower, price) {
        super(ram, batteryPower, price);
        this.modelName = modelName;
    }

    displayFeatures() {
        return `${this.modelName}\n${this.ram}\n${this.batteryPower}\n${this.price}`;
    }
    remainingAmount(priceIHave) {
        // this.priceIHave = priceIHave;
        // priceIHave = priceIHave - this.price;
        priceIHave = priceIHave - this.price;
        if (priceIhave <= 0) return "Customer has no more amount";
        else
            return `Customer has remaining Rs.'${priceIHave} after buying the android phone`;
    }
}

// IPhone
class IPhone extends SmartPhone {
    constructor(seriesName, ram, batteryPower, price) {
        super(ram, batteryPower, price);
        this.seriesName = seriesName;
    }
    displayFeatures() {
        return `${this.seriesName}\n${this.ram}\n${this.batteryPower}\n${this.price}`;
    }
    remainingAmount(priceIHave) {
        priceIHave -= this.price;
        if (priceIhave <= 0) return "Customer has no more amount";
        else
            return `Customer has remaining Rs.'+${priceIHave} +' after buying the android phone`;
    }
}
//MobileCampus
class MobileCampus {
    constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
        this.NoOfMobiles = NoOfMobiles;
        this.NoOfAndroidMobiles = NoOfAndroidMobiles;
        this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
    }

    changeMobileAvailabilityNumber(count, type) {
        this.NoOfMobiles = this.NoOfMobiles - count;
        if (type === "android") {
            this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
            return `Available android mobiles are ${this.NoOfAndroidMobiles}`;
        } else if (type === "iphone") {
            this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
            return `Available iphone mobiles are ${this.NoOfIPhoneMobiles}`;
        }
    }
}