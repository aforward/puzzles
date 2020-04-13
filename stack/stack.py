
class Stack:

  def __init__(self, max_capacity=None):
    self.data = []
    self.max_capacity = max_capacity

  def empty(self):
    return len(self.data) == 0;

  def capacity(self):
    if self.max_capacity is None:
      return False
    else:
      return len(self.data) >= self.max_capacity

  def push(self, val):
    if self.capacity():
      return False
    else:
      self.data.insert(0, val)
      return True

  def pop(self):
    if self.empty():
      return None
    else:
      val = self.data[0]
      del(self.data[0])
      return val

  def peek(self):
    if self.empty():
      return None
    else:
      return self.data[0]

