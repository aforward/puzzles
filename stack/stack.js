
function Stack(/* optional */ capacity) {

  // Helper function to turn a negative
  // or undefined capcity into "no capacity"
  function cleanCapacity(capacity) {
    if (typeof capacity == "undefined") {
      return null;
    } else if (capacity < 0) {
      return null;
    } else {
      return capacity;
    }
  }

  // Private data used to manage this object
  let p = {
    data: [null],
    length: 0,
    capacity: cleanCapacity(capacity),
  }

  // Public API available
  let entity = {
    empty: () => p.length == 0,
    capacity: () => p.capacity === p.length,
    peek: () => p.data[p.length],
    push: (record) => {
      if (p.length === p.capacity) {
        return false;
      }

      p.length += 1;
      p.data[p.length] = record;
      return true;
    },
    pop: () => {
      const record = entity.peek();
      p.length = Math.max(p.length - 1, 0);
      return record;
    }
  };

  return entity;
}

module.exports = Stack;
