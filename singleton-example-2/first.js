// import FancyLogger from "./Fancylogger.js";
// const logger = new FancyLogger();

//After Appling Singleton Pattern
import logger from "./Fancylogger.js";

export default function logFirstImplementation() {
  logger.log("first log message");
  logger.printLogsCount();
}
