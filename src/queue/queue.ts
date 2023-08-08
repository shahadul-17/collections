import { IQueue } from "./queue.i";

const DEFAULT_INITIAL_CAPACITY = 16;

export class Queue<Type> implements IQueue<Type> {

  private initialCapacity: number;
  private head: number = 0;
  private tail: number = 0;
  private elements: Array<undefined | Type>;

  constructor(initialCapacity?: number) {
    this.initialCapacity = typeof initialCapacity === "number"
      ? initialCapacity
      : DEFAULT_INITIAL_CAPACITY;
    this.elements = new Array<Type>(this.initialCapacity);
  }

  get count(): number {
    return this.tail - this.head;
  }

  enqueue(element: Type): void {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue(): undefined | Type {
    if (this.count === 0) { return undefined; }

    const element = this.elements[this.head];

    delete this.elements[this.head];

    this.head++;

    return element;
  }

  peek(): undefined | Type {
    if (this.count === 0) { return undefined; }

    return this.elements[this.head];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  clear(): void {
    this.head = 0;
    this.tail = 0;
  }
}
