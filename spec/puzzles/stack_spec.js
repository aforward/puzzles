describe("Stack", function() {
  const Stack = require('../../stack/stack');
  let stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it("empty", function() {
    expect(stack.empty()).toEqual(true);

    stack.push("apples");
    expect(stack.empty()).toEqual(false);

    stack.peek();
    expect(stack.empty()).toEqual(false);

    stack.pop();
    expect(stack.empty()).toEqual(true);
  });

  it("capacity", function() {
    stack = new Stack(1);
    expect(stack.capacity()).toEqual(false);

    expect(stack.push("apples")).toEqual(true);
    expect(stack.capacity()).toEqual(true);

    expect(stack.push("bananas")).toEqual(false);

    stack.peek();
    expect(stack.capacity()).toEqual(true);

    stack.pop();
    expect(stack.capacity()).toEqual(false);
  });

  it("push", function() {
    stack.push("apples");
    expect(stack.peek()).toEqual("apples");

    stack.push("bananas");
    expect(stack.peek()).toEqual("bananas");
  })

  it("peek", function() {
    expect(stack.peek()).toEqual(null);

    stack.push("apples");
    expect(stack.peek()).toEqual("apples");

    stack.push("bananas");
    expect(stack.peek()).toEqual("bananas");
  })

  it("pop", function() {
    expect(stack.pop()).toEqual(null);

    stack.push("apples");
    stack.push("bananas");
    stack.push("carrots");
    expect(stack.pop()).toEqual("carrots");
    expect(stack.pop()).toEqual("bananas");
    expect(stack.pop()).toEqual("apples");
    expect(stack.pop()).toEqual(null);
    expect(stack.pop()).toEqual(null);
  })

});
