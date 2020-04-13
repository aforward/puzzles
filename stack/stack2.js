
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

function assertEquals(expected, actual, msg = "Unexpected value") {
  if (expected == actual) {
    console.log(".");
  } else {
    console.log(`F\n${msg} [${expected}] != [${actual}]`);
  }

}

let s = new Stack();

assertEquals(true, s.isEmpty());

s.push("apples");
assertEquals("apples", s.peek());
assertEquals(false, s.isEmpty());

s.push("bananas");
assertEquals(false, s.isEmpty());
assertEquals("bananas", s.peek());

assertEquals("bananas", s.pop());
assertEquals("apples", s.peek());
assertEquals(false, s.isEmpty());

s.pop();
assertEquals(true, s.isEmpty());