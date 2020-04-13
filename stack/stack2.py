class Stack:
    def __init__(self):
        self.root = {'next': None, 'val': None}

    def isEmpty(self):
        return self.root['next'] is None;

    def push(self, val):
        self.root = {'next': self.root, 'val': val}

    def peek(self):
        return self.root['val']

    def pop(self):
        topVal = self.root['val']
        self.root = self.root['next'] or self.root
        return topVal

def assertEquals(expected, actual, msg = "Unexpected result"):
    if (expected == actual):
        print(".", end='')
    else:
        print(f"F\n{msg} [{expected}] != [{actual}]")

s = Stack()
assertEquals(True, s.isEmpty())


s.push("apples")
assertEquals(False, s.isEmpty())
assertEquals("apples", s.peek())

s.push("bananas")
assertEquals(False, s.isEmpty())
assertEquals("bananas", s.peek())
assertEquals("bananas", s.pop())
assertEquals("apples", s.peek())

s.push("carrots")
assertEquals(False, s.isEmpty())
assertEquals("carrots", s.peek())

assertEquals("carrots", s.pop())
assertEquals("apples", s.pop())
assertEquals(True, s.isEmpty())