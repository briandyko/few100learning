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
});