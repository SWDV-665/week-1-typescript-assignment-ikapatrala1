
/**
  * Student Name: Imtiaz Ahmed Kapatrala
  */


/**
  * Create a Grocery class.
  */

class Grocery {
    name: string;
	quantity:string;
	type:string;
	price:string
    constructor(public nameOfGrocery: string, public quantityAvailable: string, public typeOfProduct: string, public priceOfProduct: string) {
        this.name = nameOfGrocery;
		this.quantity = quantityAvailable;
		this.type = typeOfProduct;
		this.price = priceOfProduct;
    }
}

/**
  * This function will print the attributes from the grocery object
  */

function printGrocery(grocery:Grocery) {
    return "Name : " + grocery.name+",      Quantity : " + grocery.quantity+",      Type : " + grocery.type+",      Price : " + grocery.price+"    <br />";
}

let groc1 = new Grocery("Apple", "10", "Fruits", "$10.99");
let groc2 = new Grocery("Bread", "3", "Bakery", "$10.99");
let groc3 = new Grocery("Milk", "10", "Dairy", "$6.99");
let groc4 = new Grocery("Eggs", "24", "AnimalProducts", "$3.99");
let groc5 = new Grocery("Cheese", "15", "Dairy", "$8.99");
let groc6 = new Grocery("Banana", "17", "Fruits", "$2.99");

let groceries: Grocery[] = [groc1,groc2,groc3,groc4,groc5,groc6]; 

let groceryList = ""

for(var index in groceries)
{ 
     groceryList = groceryList + printGrocery(groceries[index]); 
	
}

document.body.innerHTML = groceryList