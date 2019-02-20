import { roundToTwoPlaces } from "./utils";

describe('destructuring', () => {
    it('destructuring arrays', () => {
        const friends = ['sean', 'billy', 'david', 'sarah', 'mo'];

        //non destrucuring way
        const f1 = friends[0];
        const f2 = friends[1];
        expect(f1).toBe('sean');
        expect(f2).toBe('billy');

        //destructuring
        const [d1, d2] = friends;
        expect(d1).toBe('sean');
        expect(d2).toBe('billy');

        //let's say I want sean and david, but not billy and everybody else in a new array?   (destructuring is not really for BIG sets of data, but is useful for smaller sets)
        const [e1, , e2, ...rest] = friends;
        expect(e1).toBe('sean');
        expect(e2).toBe('david');
        expect(rest).toEqual(['sarah', 'mo']);
    });

    it('destructuring objects', () => {
        const friends = {
            number1: 'sean',
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        };

        const { number1, number2 } = friends;
        expect(number1).toBe('sean');
        expect(number2).toBe('billy');

        const { number4: f1, number5: f2 } = friends;
        expect(f1).toBe('sarah');
        expect(f2).toBe('mo');

        const { number1: n1, ...other } = friends;

        expect(n1).toBe('sean');
        expect(other).toEqual({
            number4: 'sarah',
            number2: 'billy',
            number3: 'david',
            number5: 'mo'
        });


    });
});
describe('array methods', () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('forEach allows you to look at each member (this doesnt produce anything!)', () => {
        numbers.forEach((n) => console.log(n));
        //numbers.forEach(() => console.log()); - results in blanks w/out argument passed in....think like (var n in list) in c# sort of 
    });

    describe('methods that produce a new array', () => {
        it('selecting just specific stuff from an array', () => {
            const evens = numbers.filter(n => n % 2 === 0); //(function (n:number) {return n% 2 === 0}) -- this is longhand that is exactly the same that could be used in lieu of arrow function
            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]); // just showing you this so you see it doesn't change the array
            expect('').toBeFalsy();
            expect(' ').toBeTruthy();

            //this is a practical example of testing for truthiness Jeff did in Chrome console    
            // let movie = { title: 'Jaws', director: 'Spielberg', yearReleased: 1977 }

            // let movie2 = { title: 'Star Wars', director: 'Lucas' }

            // const movies = [movie, movie2]
            // movies.forEach(m => {
            //     let msg = `Movie ${m.title} by ${m.director}`;
            //     if (m.yearReleased) {
            //         msg += ` was released in ${m.yearReleased}`;
            //     }
            //     console.log(msg);
            // })
        });
        it('map lets you transform each element of the source array', () => {
            //if there's a place you want to go, it'll get you there you know. it's the map. it's the map. it's the map.

            const doubled = numbers.map(n => n * 2); //like select in LINQ.......filter is like where
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
        it('a quick practice', () => {
            interface Vehicle {
                vin: string;
                makeAndModel: string;
                mileage: number;
            }
            const vehicles: Vehicle[] = [
                { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
            ];

            const answer = ['Toyota Prius', 'Ford Explorer'];

            // find all the vehicles with < 100_000, but just give me the make and model.

            const result = vehicles // all of the Vehicle objects
                .filter(v => v.mileage < 100_000) // just the Vehicle objects with < 100_000. Once gain, like where in LINQ
                .map(v => v.makeAndModel) // An array of strings that are just the make and model of those. Once again, like select in LINQ

            expect(result).toEqual(answer);
        });
        it('another example', () => {
            interface Product {
                id: number;
                description: string;
                cost: number;
            }

            const products: Product[] = [
                { id: 1, description: 'Eggs', cost: 1.99 },
                { id: 2, description: 'Beer', cost: 7.99 },
                { id: 3, description: 'Chips', cost: 2.99 },
            ];

            // our price markup is 30%.
            // for each product create an array of objects that look like this:
            interface SaleItem {
                id: number;
                description: string;
                price: number;
            }

            const answer: SaleItem[] = products
                .map(p => {
                    const result: SaleItem = {
                        id: p.id,
                        description: p.description,
                        price: p.cost * 1.30
                    };
                    return result;
                }).filter(si => si.price > 5.00);

            expect(answer).toEqual([{
                id: 2, description: 'Beer', price: 10.387
            }]);
        });
        it('same solution, with named function instead of anonymous', () => {
            interface Product {
                id: number;
                description: string;
                cost: number;
            }

            const products: Product[] = [
                { id: 1, description: 'Eggs', cost: 1.99 },
                { id: 2, description: 'Beer', cost: 7.99 },
                { id: 3, description: 'Chips', cost: 2.99 },
            ];

            // our price markup is 30%.
            // for each product create an array of objects that look like this:
            interface SaleItem {
                id: number;
                description: string;
                price: number;
            }

            // but only if the price is > $5.00
            function makeSaleItemFromProduct(product: Product): SaleItem {
                const result: SaleItem = {
                    id: product.id,
                    description: product.description,
                    price: roundToTwoPlaces(product.cost)
                };
                return result;
            }

            function highPricedItems(item: SaleItem) {
                return item.price > 5.00;
            }
            const answer: SaleItem[] = products
                .map(makeSaleItemFromProduct).filter(highPricedItems);

            expect(answer).toEqual([{
                id: 2, description: 'Beer', price: 10.39
            }]);


        });

    });
});
