import { IStack } from "./stack.i";

export class Stack<Type> implements IStack<Type> {

  private elements: Array<undefined | Type>;

  constructor() {
    this.elements = new Array<Type>();
  }

  get count(): number {
    return this.elements.length;
  }

  push(element: Type): void {
    this.elements.push(element);
  }

  pop(): undefined | Type {
    return this.elements.pop();
  }

  peek(): undefined | Type {
    if (this.count === 0) { return undefined; }

    return this.elements[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  clear(): void {
    while (!this.isEmpty()) {
      this.pop();
    }
  }
}
