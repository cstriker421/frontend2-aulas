interface Car {
    brand: string;
    model: string;
    year?: number;
}


// Examples:
const myCar: Car = {
    brand: "Toyota",
    model: "Corolla"
}

const anotherCar: Car = {
    brand: "Honda",
    model: "Civic",
    year: 2020
}