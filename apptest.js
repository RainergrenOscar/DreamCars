
//Creating a new class with all the different components.
class Car{
  constructor(brand, model, modelYear, mileage, gearbox, fuel, style, color, price) {
    this.brand = brand;
    this.model = model;
    this.modelYear = modelYear;
    this.mileage = mileage;
    this.gearbox = gearbox;
    this.fuel = fuel;
    this.style = style;
    this.color = color;
    this.price = price;
  }
}

//Create empty array
let cars = []; 

//Pushing the different cars to the array "cars"
cars.push(new Car("BMW", "530e", 2021, 0, "Automatic", "Hybrid", "Sedan", "Silver", 99999, )); 
cars.push(new Car("BMW", "i3", 2021, 0, "Automatic", "Electric", "Mini", "Hazel", 33000));
cars.push(new Car("Mercedes-Benz", "A-Class", 2021, 0, "Automatic", "Petrol", "Hatchback", "White", 34999));
cars.push(new Car("Landrover", "Defender", 2021, 0, "Automatic", "Diesel", "SUV", "Silver", 49000));
cars.push(new Car("Mercedes-Benz", "250e", 2021, 0, "Automatic", "Hybrid", "Sedan", "White", 44999));
cars.push(new Car("Alfa Romeo", "Giulia", 2016, 12000, "Shift", "Petrol", "Sedan", "Night Blue", 20000));
cars.push(new Car("Citroën", "Grand C4", 2014, 14999, "Shift", "Petrol", "Mini-van", "Light silver", 9999));
cars.push(new Car("Kia", "Niro", 2015, 9800, "Automatic", "Hybrid", "Crossover", "Dark Night", 19999));

//Function that prints out all the different components from the array.
function carInfo(x) {

  document.write("<p>")
  document.write("<b> Brand: </b>" + cars[x].brand + "<br>");
  document.write("<b> Model: </b>" + cars[x].model + "<br>");
  document.write("<b> Modelyear: </b>" + cars[x].modelYear + "<br>");
  document.write("<b> Mileage: </b>" + cars[x].mileage + "<br>");
  document.write("<b> Gearbox: </b>" + cars[x].gearbox + "<br>");
  document.write("<b> Fuel: </b>" + cars[x].fuel + "<br>");
  document.write("<b> Style: </b>" + cars[x].style + "<br>");
  document.write("<b> Color: </b>" + cars[x].color + "<br>");
  document.write("<b> Price: </b>" + cars[x].price + " $ <br>");
  document.write("</p>");
}