/* 
Assume that I have 2 type of objects 
- process
- process manager 

In my application I can have many process with many states, but I must have only one manager to mange process
*/

function Process(state) {
  this.state = state;
}

//Singleton will use IIFE, and clousers
const Singleton = (function () {
  function ProcessManager() {
    this.ProcessNumbers = 0;
  }

  let pManager;

  function CreateProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = CreateProcessManager();
      return pManager;
    },
  };
})();

// I create 2 process managers
// 2 manager should be the same
const processManager1 = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager1 === processManager2); //true
// this mean that manager 1,2 are the same

console.dir(Singleton.getProcessManager);
