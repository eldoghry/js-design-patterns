/* 
- Observer Pattern: one to many The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs.

We will have one subject and many observers
when subject make trigger -> all observers will notified and fired 
*/

function Subject() {
  this.observers = []; // to keep track all observers, Observers will be array of functions
}

Subject.prototype = {
  //function want to be observer and linked to this subject
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  // remove function from subscribe list
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn !== fnToRemove) return fn;
    });
  },

  //trigger to fire observers

  fire: function () {
    this.observers.forEach((observer) => {
      observer.call(); // observer here is function
    });
  },
};

const subject = new Subject();
const observer1 = () => console.log("Observer 1 is fired!");
const observer2 = () => console.log("Observer 2 is fired!");
const observer3 = () => console.log("Observer 3 is fired!");

// subscribing observers
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

// subject.fire();
// Observer 1 is fired!
// Observer 2 is fired!
// Observer 3 is fired!

subject.unsubscribe(observer2);
subject.fire();
// Observer 1 is fired!
// Observer 3 is fired!
