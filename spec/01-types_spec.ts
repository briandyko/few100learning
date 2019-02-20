describe('variables and constants and stuff', () => {
    describe('declaring variables', () => {
        it('using let to create a binding', () => {
            let name;

            name = 'Joe';
            expect(name).toBe('Joe');

            name = 11;

            expect(name).toBe(11);
        });
        it('some typescript stuff for variables', () => {
            let name: string | number = 'Joe'; // Union Type.

            //name = 'Joe';
            expect(name).toBe('Joe');

            name = 11;

            expect(name).toBe(11);
        });
        it('declaring constants', () => {
            const PI = 3.1415927;

            const FAVORITE_NUMBERS = [9, 22, 108];

            //FAVORITE_NUMBERS = []; not gonna work
            FAVORITE_NUMBERS[0] = 10; //this is allowed...array are mutable in JS

            const MOVIE = {
                title: 'The Force Awakens',
                director: 'Abrams'
            };

            MOVIE.director = 'Johnson'; //objects are mutable in JS....you can't do MOVIE.director = {} though....declaring the variable as a constant does not change the nature of the thing that variable refers to.

        });
        it('var is still there but it stinks and should not be used', () => {
            if (true) {
                var name = 'Fido'; //should not be visible to anything outside this scope, but it is since it gets 'hoisted'...so don't do it......let name = 'Fido' would fail, btw!!! 
            }

            expect(name).toBe('Fido');
        });
    });

    describe('strings', () => {
        it('delimiting', () => {
            let first = 'Joe',
                last = "Schmidt";
            expect("Joe").toBe(first);

            let msg = "She told me \"get Lost!\"";
            let msg2 = 'She told me "Get Lost!"';

            let story = `Chapter 1.
            
            It was a drak and stormy night`;
            console.log(story);

            let fullName = `That is ${last}, ${first}`;
            expect(fullName).toBe('That is Schmidt, Joe');

        });
    });

    describe('various literals', () => {
        it('examples', () => {
            let n1 = 12; // number
            let n2 = 1.2; // still a number
            let n3 = 0xff; //still a number, but hexadecimal (base 16)
            let n4 = 0b00101; //still a number, but in binary.
            let n5 = 0o744; // octal. Who the heck uses that?
            //typesript thing
            const salary = 1_000_000; //can be used in lieu of commas, which cannot be used like normal obviously
        });
    });

    describe('arrays and array literals', () => {
        it('has them', () => {
            // const stuff : (number | string)[] = [12, 13];
            const stuff: Array<number | string> = [12, 13]; // Both create an array that is capable of holding numbers or strings
            stuff[2] = 'tacos';

            expect(stuff[2]).toBe('tacos');

            let food = stuff[2];
            // food.    // Intelisense here is the union of string and number for methods
        });
        describe('tuples', () => {
            it('a brief introduction TS', () => {
                // Very typescript specific
                let warren: [string, string, number, string];   // Array where the first element is a string, second is a string, third is a number, fourth is a string
                warren = ['Warren', 'Ellis', 55, 'Musician'];
                // warren = ['Warren', 'Ellis', '55', 'Musician']; // Note the error on the third element when uncommented

                let occupation = warren[3]; // typeof: string
                let age = warren[2];    // typeof: number
            });
            it('an example', () => {
                // first is typed as string, last is typed as string, and the function returns string hence the first:string, last: string, the function returns a tuple containing a string and a number
                function formatName(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }

                const [fullName, len] = formatName('Han', 'Solo') // called destructuring, the left operand says the right operand returns an array, store the first value in a variable called fullName and the second in a variable called len
                expect(fullName).toBe('Solo, Han');
                expect(len).toBe(9);

                // Can be done with tuple variables as well
                const stuff = ['Jeff', 'Gonzalez', 49];
                const [firstName, , age] = stuff; // the destructuring where firstName is create based on element 0 and age is created based on element 2 of the stuff tuple/array, note the empty comma section which says to do nothing with element 1o
                expect(firstName).toBe('Jeff');
                expect(age).toBe(49);
            });
        });
    });
});