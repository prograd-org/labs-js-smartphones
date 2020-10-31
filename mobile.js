//SmartPhone class
class SmartPhone {
  constructor(ram, batteryPower, price) {
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }
  //method for displaying features//
  displayFeatures() {
    return this.ram + "\n" + this.batteryPower + "\n" + this.price;
  }
  //method for calculating remaning amount//
  remainingAmount(priceIHave) {
    this.price = this.price - priceIHave;
  }
}

// AndroidPhone class//
//this class inherits some properties and methods from smartphone class, this is known as class inheritance//
class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    super(ram, batteryPower, price); //super keyword is used for getting the parent class features//
    this.modelName = modelName;
  }

  displayFeatures() {
    return (
      this.modelName +
      "\n" +
      this.ram +
      "\n" +
      this.batteryPower +
      "\n" +
      this.price
    );
  }

  remainingAmount(priceIHave) {
    this.price = priceIHave - this.price;

    console.log(this.price);
    if (this.price <= 0) {
      return "Customer has no more amount";
    } else {
      return (
        "Customer has remaining Rs." +
        this.price +
        " after buying the android phone"
      );
    }
  }
}

// IPhone class inherits from smartphone(parent) class//
class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.seriesName = seriesName;
  }
  displayFeatures() {
    return (
      this.seriesName +
      "\n" +
      this.ram +
      "\n" +
      this.batteryPower +
      "\n" +
      this.price
    );
  }

  remainingAmount(priceIHave) {
    this.price = priceIHave - this.price;
    if (this.price > 0) {
      console.log(this.price);
      return (
        "Customer has remaining Rs." + this.price + " after buying an iphone"
      );
    } else if (this.price == 0) {
      return "Customer has no more amount";
    } else {
      return "Customer can't able to buy a phone due to insufficient amount";
    }
  }
}

//MobileCampus determines the no. of mobiles along with thier types//
class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
    this.NoOfMobiles = NoOfMobiles;
    this.NoOfAndroidMobiles = NoOfAndroidMobiles;
    this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
  }
  //this method returns the no. of distinct types of mobiles upon decrement in stock//
  changeMobileAvailabilityNumber(count, type) {
    this.NoOfMobiles = this.NoOfMobiles - count;
    if (type === "android") {
      this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
      return "Available android mobiles are " + this.NoOfAndroidMobiles;
    }
    if (type === "iphone") {
      this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
      return "Available iphone mobiles are " + this.NoOfIPhoneMobiles;
    }
  }
}
