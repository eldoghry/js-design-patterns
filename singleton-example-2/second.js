// import FancyLogger from "./Fancylogger.js";
// const logger = new FancyLogger();

//After Appling Singleton Pattern
import logger from "./Fancylogger.js";

export default function logSecondImplementation() {
  logger.log("second log message");
  logger.printLogsCount();
}
