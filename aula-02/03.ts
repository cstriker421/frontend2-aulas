class ListHandler<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter(existingItem => existingItem !== item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberList = new ListHandler<number>();

numberList.add(1);
numberList.add(2);
numberList.add(3);

numberList.remove(2);

console.log(numberList.getAll()); // Output: [1, 3]