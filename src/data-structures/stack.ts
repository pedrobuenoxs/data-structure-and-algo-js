// Stack is LIFO (Last in First Out)

interface IStack {
  pop: () => number | undefined; // assuming pop should return the popped element or undefined if stack is empty
  push(elements: number): void; // corrected to specify parameter type
  peek: () => number | undefined; // assuming peek should return the top element or undefined if stack is empty
  isEmpty: () => boolean; // corrected to return a boolean
  clear: () => void;
  size: () => number; // corrected to return a number
}

interface IStack {
  pop: () => number | undefined; // assuming pop should return the popped element or undefined if stack is empty
  push: (elements: number) => void; // corrected to specify parameter type
  peek: () => number | undefined; // assuming peek should return the top element or undefined if stack is empty
  isEmpty: () => boolean; // corrected to return a boolean
  clear: () => void;
  size: () => number; // corrected to return a number
}

class Stack implements IStack {
  items: number[];
  constructor() {
    this.items = [];
  }

  push(elements: number) {
    this.items.push(elements);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

// class StackObj {
//   constructor() {
//     this.count = 0;
//     this.items = {};
//   }

//   push(element) {
//     this.items[this.count] = element;
//     this.count++;
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return undefined;
//     }

//     this.count--;
//     const result = this.items[this.count];
//     delete this.items[this.count];
//     return result;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     return this.items[this.count - 1];
//   }

//   isEmpty() {
//     return this.count === 0;
//   }

//   clear() {
//     this.items = [];
//   }

//   size() {
//     return this.count;
//   }

//   toString() {
//     if (this.isEmpty()) {
//       return "";
//     }

//     let objString = `${this.items[0]}`;
//     for (let i = 1; i < this.count; i++) {
//       objString = `${objString},${this.items[i]}`;
//     }

//     return objString;
//   }
// }

function run() {
  const stack = new Stack();
  console.log(stack.isEmpty());
  stack.push(5);
  stack.push(5);
  console.log(stack.peek());
}

run();

//stack components1
