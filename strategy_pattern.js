/* 
Assume That I waill create program that calculate different shipping calcucalation from differenet providor 
*/

//example

// Below there are 3 different shipping calculcation strategy
function FEDEX() {
  this.calculation = (package) => {
    // do some fedex calculation algorithms ...
    return 2.31;
  };
}

function ARAMEX() {
  this.calculation = (package) => {
    // do some aramex calculation algorithms ...
    return 1.64;
  };
}

function UPS() {
  this.calculation = (package) => {
    // do some ups calculation algorithms ...
    return 1.92;
  };
}

const fedex = new FEDEX();
const ups = new UPS();
const aramex = new ARAMEX();
const pakacge = { from: "A", to: "B", weight: "2K" };

//Strategy Pattern

function SHIPPING() {
  this.company = ""; //just from inishialization
  this.setStrategy = function (company) {
    this.company = company;
  };

  this.calculation = function (package) {
    return this.company.calculation(package);
  };
}

const shipping = new SHIPPING();

shipping.setStrategy(fedex);
console.log(`Fedex calculcation: ${shipping.calculation()}`);
//Fedex calculcation: 2.31

shipping.setStrategy(ups);
console.log(`ups calculcation: ${shipping.calculation()}`);
// ups calculcation: 1.92

shipping.setStrategy(aramex);
console.log(`aramex calculcation: ${shipping.calculation()}`);
// aramex calculcation: 1.64
