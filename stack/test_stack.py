import stack

def test_empty():
  s = stack.Stack()
  assert s.empty() == True

  s.push("hello")
  assert s.empty() == False

def test_peek():
  s = stack.Stack()
  assert s.peek() == None

  s.push("hello")
  assert s.peek() == "hello"

  s.push("world")
  assert s.peek() == "world"

def test_full_no_capacity():
  s = stack.Stack()
  assert s.capacity() == False
  s.push("a")
  assert s.capacity() == False
  s.push("b")
  assert s.capacity() == False
  s.push("c")
  assert s.capacity() == False

def test_full_yes_capacity():
  s = stack.Stack(2)
  assert s.capacity() == False
  s.push("a")
  assert s.capacity() == False
  s.push("b")
  assert s.capacity() == True
  s.pop()
  assert s.capacity() == False

def test_push_pop():
  s = stack.Stack(2)
  assert s.pop() == None

  assert s.push("hello") == True
  assert s.push("world") == True
  assert s.push("nomore") == False

  assert s.pop() == "world"
  assert s.push("monde") == True
  assert s.pop() == "monde"
  assert s.pop() == "hello"
  assert s.pop() == None
