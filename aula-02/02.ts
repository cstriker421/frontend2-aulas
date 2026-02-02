class Vehicle {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  description(): string {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

class Car extends Vehicle {
  doors: number;

  constructor(
    brand: string,
    model: string,
    year: number,
    doors: number
  ) {
    super(brand, model, year); // Calls Vehicle constructor
    this.doors = doors;
  }
  description(): string {
    return `${super.description()} with ${this.doors} doors.`;
  }
}

const MyCar = new Car("Mercedes-Benz", "C-Class", 2020, 4);

console.log(MyCar.brand);           // Output: "Mercedes-Benz"
console.log(MyCar.model);           // Output: "C-Class"
console.log(MyCar.year);            // Output: 2020
console.log(MyCar.doors);           // Output: 4
console.log(MyCar.description());   // Output: "2020 Mercedes-Benz C-Class with 4 doors."