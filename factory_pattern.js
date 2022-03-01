//centralize creation logic in one factory
//example

//Developer Object shape
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

//Tester Object shape
function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

//Employee Facctory
function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);

      case 2:
        return new Tester(name);
    }
  };
}

function greating() {
  console.log(`Hi I am ${this.name} and I am a ${this.type}`);
}

const factory = new EmployeeFactory();
const employes = []; //db

employes.push(factory.create("mohamed", 1));
employes.push(factory.create("gameela", 2));
employes.push(factory.create("noha", 1));
employes.push(factory.create("ali", 2));
employes.push(factory.create("ashraf", 2));
// employes.push(factory.create("mohamed",3))

employes.forEach((emp) => greating.call(emp));
// Hi I am mohamed and I am a Developer
// Hi I am gameela and I am a Tester
// Hi I am noha and I am a Developer
// Hi I am ali and I am a Tester
// Hi I am ashraf and I am a Tester

//If tomorrow I want to add new type of employe like HR:  I will just need to add new switch case to factory and add new HR object shape
