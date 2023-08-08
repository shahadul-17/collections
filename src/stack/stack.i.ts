export interface IStack<Type> {

  /**
   * Gets the number of elements contained in the Stack.
   */
  get count(): number;

  /**
   * Adds an element to the beginning of the Stack.
   * @param element Element to be added to the Stack.
   */
  push(element: Type): void;

  /**
   * Removes and returns the element at the beginning of the Stack.
   */
  pop(): undefined | Type;

  /**
   * Returns the element at the beginning of the Stack without removing it.
   */
  peek(): undefined | Type;

  /**
   * Checks if the Stack is empty.
   */
  isEmpty(): boolean;

  /**
   * Removes all the elements from the Stack.
   */
  clear(): void;
}
