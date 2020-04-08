
# Problem Solving With Programming Languages

## Language Setup

### JavaScript

We will be using [npm](https://www.npmjs.com) to
install the necessary packages and [jasmine](https://jasmine.github.io)
as our test runner.

The [installation instructions for jasmine](https://jasmine.github.io/pages/getting_started.html)
are copied below.

```
npm install --save-dev jasmine
```

You can test if things are setup by running the "me" test

```
npx jasmine spec/puzzles/me_spec.js
```

You can run all tests with

```
npx jasmine
```


## Problems

### 0. Testing Testing With Me

This is just setup to test the testing frameworks of each language.


### 1. Implement a stack

Implement a stack (LIFO - last in first out) that can be configured
with a capacity (max number of elements).

API
```
// Is the stack empty or not?
empty() : bool

// Is the stack full (i.e at capacity) or not?
capacity() : bool

// Peek at the top value (return NULL if empty)
peek() : object | null

// Add a new record to the top of the stack,
// return true if you successfully add the record
// false otherwise
push(record) : bool

// Pop the last record off the stack
// (return NULL if empty)
pop() : object | null
```
