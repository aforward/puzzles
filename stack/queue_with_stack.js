
function Stack() {

  let data = {
    root: {
      next: null,
      val: null,
    }
  }

  let entity = {
    isEmpty: () => data.root.next == null,

    peek: () => data.root.val,

    push: val => {
      data.root = {
        next: data.root,
        val: val,
      }
    },

    pop: () => {
      const nextVal = data.root.val;
      data.root = data.root.next || data.root;
      return nextVal;
    },

  }
  return entity;
}

function Queue() {

  let data = {
    backwards: new Stack(),
    forwards: new Stack(),
  }

  let entity = {
    isEmpty: () => data.backwards.isEmpty() && data.forwards.isEmpty(),

    enqueue: val => {
      data.backwards.push(val);
    },

    dequeue: () => {
      if (!data.forwards.isEmpty()) {
        return data.forwards.pop();
      } else {
        while (true) {
          const nextVal = data.backwards.pop();
          if (data.backwards.isEmpty()) {
              return nextVal;
          } else {
              data.forwards.push(nextVal);
          }
        }
      }
    },
  }

  return entity;
}

function assertEquals(expected, actual, msg = "Unexpected value") {
  if (expected == actual) {
    console.log(".");
  } else {
    console.log(`F\n${msg} [${expected}] != [${actual}]`);
  }

}

let s = new Stack();

let q = new Queue();

assertEquals(true, q.isEmpty());

q.enqueue("apples");
assertEquals(false, q.isEmpty());
q.enqueue("bananas");
assertEquals(false, q.isEmpty());
assertEquals("apples", q.dequeue());
q.enqueue("carrots");
q.enqueue("donuts");
assertEquals(false, q.isEmpty());
assertEquals("bananas", q.dequeue());
assertEquals(false, q.isEmpty());
assertEquals("carrots", q.dequeue());
assertEquals(false, q.isEmpty());
assertEquals("donuts", q.dequeue());
assertEquals(true, q.isEmpty());