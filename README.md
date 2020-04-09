
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

### 2. Return the string between parens

Given a string and which paran to match (1-based)
return the string between those parens.

Here are a few use cases

API
```
match(str, whichParen) : str | null
```

Test cases

```
// no parens
matchparens.match("abcdef", 1) => NULL
matchparens.match("ab(cde)f", 2) => NULL

// not balanced
matchparens.match("ab(cdef", 1) => NULL
matchparens.match("ab(c(de)f", 1)

// simple match
matchparens.match("Hello (my name) is?", 1) => "my name"

// nested match
matchparens.match("Hello (my name (is Thomas) what is) yours?", 1) => "my name (is Thomas) what is"
matchparens.match("Hello (my name (is Thomas) what is) yours?", 2) => "is Thomas"
matchparens.match("ab(c(de)f", 2) => "de"
```

### 3. Anagrams

Given a list of words L and a word W, return a list of words from
L that are anagrams of W.

### 4. Shuffle a Deck of Cards

Write a module to create and shuffle a deck of cards.
