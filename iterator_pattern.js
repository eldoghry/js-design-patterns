//Iterator Pattern: used when I want to iterate collection
// I can define how I want loop collection ex front to back, back to front, every 2 items ...

const Iterator = function (items) {
  this.items = items;
  this.index = 0; // starting point, here we can define iterator strategy
};

//attach new methods to itereator object

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },

  next: function () {
    return this.items[this.index++];
  },

  reset: function () {
    this.index = 0;
  },

  first: function () {
    this.reset();
    return this.next();
  },

  each: function (callback) {
    for (this.first(); this.hasNext(); ) {
      callback(this.next());
    }
  },
};

const collection = [1, "Mohamed", true, 1.52, [12, 23], { x: 1 }];
const iter = new Iterator(collection);

while (iter.hasNext()) {
  console.log(iter.next());
}
/* 
1
Mohamed
true
1.52
[ 12, 23 ]
{ x: 1 }
*/

console.log(iter.next()); //undefine becouse hasNext will be false, while loop iterate all items in the collection
//---------------------------------
iter.reset();
console.log(iter.next()); // 1
//---------------------------------

const log = (item) => console.log(item);
iter.each(log);
