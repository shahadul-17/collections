export interface IQueue<Type> {

  /**
   * Gets the number of elements contained in the Queue.
   */
  get count(): number;

  /**
   * Adds an element to the end of the Queue.
   * @param element Element to be added to the Queue.
   */
  enqueue(element: Type): void;

  /**
   * Removes and returns the element at the beginning of the Queue.
   */
  dequeue(): undefined | Type;

  /**
   * Returns the element at the beginning of the Queue without removing it.
   */
  peek(): undefined | Type;

  /**
   * Checks if the Queue is empty.
   */
  isEmpty(): boolean;

  /**
   * Removes all the elements from the Queue.
   */
  clear(): void;
}
