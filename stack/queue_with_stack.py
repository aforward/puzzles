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

class Queue:
    def __init__(self):
        self.backwards = Stack()
        self.forwards = Stack()

    def isEmpty(self):
        return self.backwards.isEmpty() and self.forwards.isEmpty()

    def enqueue(self, val):
        self.backwards.push(val)

    def dequeue(self):
        if not self.forwards.isEmpty():
            return self.forwards.pop()
        else:
            while (True):
                lastVal = self.backwards.pop()
                if (self.backwards.isEmpty()):
                    return lastVal
                else:
                    self.forwards.push(lastVal)

def assertEquals(expected, actual, msg = "Unexpected result"):
    if (expected == actual):
        print(".", end='')
    else:
        print(f"F\n{msg} [{expected}] != [{actual}]")



q = Queue()
assertEquals(True, q.isEmpty())

q.enqueue("apples")
assertEquals(False, q.isEmpty())

q.enqueue("bananas")
assertEquals(False, q.isEmpty())
assertEquals("apples", q.dequeue())

q.enqueue("carrots")
assertEquals(False, q.isEmpty())
assertEquals("bananas", q.dequeue())
assertEquals("carrots", q.dequeue())
assertEquals(True, q.isEmpty())