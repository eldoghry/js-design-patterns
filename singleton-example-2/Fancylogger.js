// export default class FancyLogger {
//   constructor() {
//     this.logs = [];
//   }

//   log(message) {
//     this.logs.push(message);
//     console.log(`Fancy: ${message}`);
//   }

//   printLogsCount() {
//     console.log(`${this.logs.length} Logs`);
//   }
// }

//Appling Singleton Pattern
class FancyLogger {
  constructor() {
    // FancyLogger.instance is static varibale not exist first time
    if (!FancyLogger.instance) {
      this.logs = [];
      console.log("instance created");
      FancyLogger.instance = this;
    }

    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`Fancy: ${message}`);
  }

  printLogsCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger();

Object.freeze(logger); //to make sure that this object not change (attributes or methods) from outside

export default logger;
