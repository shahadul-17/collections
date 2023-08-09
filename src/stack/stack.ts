import { IStack } from "./stack.i";

export class Stack<Type> implements IStack<Type> {

  private elements: Array<undefined | Type>;

  constructor() {
    this.elements = new Array<Type>();
  }

  public get count(): number {
    return this.elements.length;
  }

  public push(element: Type): void {
    this.elements.push(element);
  }

  public pop(): undefined | Type {
    return this.elements.pop();
  }

  public peek(): undefined | Type {
    if (this.count === 0) { return undefined; }

    return this.elements[this.count - 1];
  }

  public isEmpty(): boolean {
    return this.count === 0;
  }

  public clear(): void {
    while (!this.isEmpty()) {
      this.pop();
    }
  }
}
