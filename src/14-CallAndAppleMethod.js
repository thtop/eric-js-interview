/**
 * Task: Describe the javascript call()
 *       and apple() methods.
 *
 * Address the following:
 * 1) How do they function?
 * 2) What arguments do they take?
 * 3) How are they different?
 */

const car1 = {
    brand: 'Porsche',
    getCardescription: function (cost, year, color) {
        console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
    }
};

const car2 = {
    brand: 'Lamborghini'
};

const car3 = {
    brand: 'Ford'
}


car1.getCardescription(80000, 2010, 'blue')

// call
car1.getCardescription.call(car2, 20000, 2013, 'yello');

// apply
car1.getCardescription.apply(car3, [35000, 2012, 'black']);
