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

function assertEquals($expected, $actual, $msg = "Unexpected result")
{
    if ($expected == $actual) {
      echo ".";
      return null;
    } else {
      echo "F";
      return "$msg [{$expected}] != [{$actual}]";
    }
}


$s = new Stack();

assertEquals(true, $s->isEmpty());

$s->push("apples");
assertEquals(false, $s->isEmpty());
assertEquals("apples", $s->peek());

$s->push("bananas");
assertEquals(false, $s->isEmpty());
assertEquals("bananas", $s->peek());

assertEquals("bananas", $s->pop());
assertEquals("apples", $s->peek());
assertEquals(false, $s->isEmpty());

$s->pop();
assertEquals(true, $s->isEmpty());