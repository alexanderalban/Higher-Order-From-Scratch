// .map function from scratch!
// .map performs a function on each item in an array, and returns a new array with the results.
// for this .map, let's add 2 to each item in the original array, and return our new array

let firstMapArr = [3, 4, 235, 6, 12];

const addTwo = (array) => {
    let addTwoArr = []
    for (let i = 0; i < array.length; i++) {
        let mathResult = array[i] + 2;
        addTwoArr.push(mathResult);
        console.log(array);
    }
};

addTwo(firstMapArr);



// .reduce from scratch! 
// .reduce takes all of the items in an array, and reduces them down to one value
// for this example we're going to take in an array of food orders with their amounts, and return the
// total amount of all the food orders

//first we're going to need the orders:

class FoodOrder {
    constructor(name, food, amount) {
        this.name = name;
        this.food = food;
        this.amount = amount;
    }
};

const sally = new FoodOrder("Sally", "burger", 3);
const william = new FoodOrder("William", "fries", 2);
const jacob = new FoodOrder("Jacob", "milkshake", 4);
const beth = new FoodOrder("Beth", "Soda", 1);

foodArray = [sally, william, jacob, beth];

const reduceFoodAmount = (array) => {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i].amount;
    }
    return total;
}

reduceFoodAmount(foodArray);

// .filter from scratch! 
// .filter returns an array of values that pass a test that you set
// it does this by taking in an array, and a function that returns an array of only the items that
// return true
// for this array, we can return only the numbers that are even

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenFilter = (array) => {
    let evenArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i])
        }
    }
    return evenArray;
}

evenFilter(numberArray);