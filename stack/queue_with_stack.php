<?php

class Stack {

  private $root;

  public function isEmpty()
  {
      return $this->root == null;
  }

  public function pop()
  {
      if ($this->root) {
        $val = $this->root["val"];
        $this->root = $this->root["next"];
      } else {
        $val = null;
      }
      return $val;
  }

  public function peek()
  {
      return $this->root ? $this->root["val"] : null;
  }

  public function push($val)
  {
      $oldRoot = $this->root;
      $this->root = ["next" => $oldRoot, "val" => $val ];
  }

}

class Queue {

  private $backwards;
  private $forwards;

  public function __construct()
  {
      $this->backwards = new Stack();
      $this->forwards = new Stack();
  }

  public function isEmpty()
  {
    return $this->backwards->isEmpty() && $this->forwards->isEmpty();
  }

  public function enqueue($val)
  {
      $this->backwards->push($val);
  }

  public function dequeue()
  {
      if (!$this->forwards->isEmpty()) {
        return $this->forwards->pop();
      } else {
        while (true) {
          $val = $this->backwards->pop();
          if ($this->backwards->isEmpty()) {
              return $val;
          } else {
              $this->forwards->push($val);
          }
        }
      }
  }

}

function assertEquals($expected, $actual, $msg = "Unexpected result")
{
    if ($expected == $actual) {
      echo ".";
      return null;
    } else {
      echo "F\n";
      $msg = "$msg [{$expected}] != [{$actual}]\n";
      echo "F\n{$msg}\n";
      return $msg;
    }
}


$q = new Queue();

assertEquals(true, $q->isEmpty());

$q->enqueue("apples");
assertEquals(false, $q->isEmpty());
$q->enqueue("bananas");
assertEquals(false, $q->isEmpty());
assertEquals("apples", $q->dequeue());
$q->enqueue("carrots");
$q->enqueue("donuts");
assertEquals(false, $q->isEmpty());
assertEquals("bananas", $q->dequeue());
assertEquals(false, $q->isEmpty());
assertEquals("carrots", $q->dequeue());
assertEquals(false, $q->isEmpty());
assertEquals("donuts", $q->dequeue());
assertEquals(true, $q->isEmpty());

?>