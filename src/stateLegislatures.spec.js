const {
    stateLegislatureName,
    stateLegislatureMembers,
    stateLegislatureTermLength,
    stateLegislatureTermLengthByChamber
} = require('./stateLegislatures');

describe('stateLegislatureName', () => {
    it('should return the names of the state legislature when a valid state name is passed', () => {
        const result = stateLegislatureName("ohio");
        expect(result).toEqual(
            {
                "legislatureName": "General Assembly", 
                "lowerHouse": "House of Representatives", 
                "upperHouse": "Senate"
            });
    });
    it('should return the names of the state legislature when a valid state abbreviation is passed', () => {
        const result = stateLegislatureName("oh");
        expect(result).toEqual(
            {
                "legislatureName": "General Assembly", 
                "lowerHouse": "House of Representatives", 
                "upperHouse": "Senate"
            });
    });
    it('should throw an error when an invalid state is passed.', () => {
        try{
            let didThrow = false;
            const result = stateLegislatureName("NotAState");
        }catch(error){
            didThrow = true;
            expect(error).toEqual(Error("NotAState is not a valid USA state or USA state abbreviation."));
        }
        
        expect(didThrow).toEqual(true);
    });
});

describe('stateLegislatureMembers', () => {
    it('should return the member count of the state legislature when a valid state name is passed', () => {
        const result = stateLegislatureMembers("ohio");
        expect(result).toEqual(
            {
                "House of Representatives": 99,
                "Senate": 33
            });
    });
    it('should return the member count of the state legislature when a valid state abbreviation is passed', () => {
        const result = stateLegislatureMembers("oh");
        expect(result).toEqual(
            {
                "House of Representatives": 99,
                "Senate": 33
            });
    });
    it('should throw an error when an invalid state is passed.', () => {
        try{
            let didThrow = false;
            const result = stateLegislatureMembers("NotAState");
        }catch(error){
            didThrow = true;
            expect(error).toEqual(Error("NotAState is not a valid USA state or USA state abbreviation."));
        }
        
        expect(didThrow).toEqual(true);
    });
});

describe('stateLegislatureTermLength', () => {
    it('should return the term length of the state legislature when a valid state name is passed', () => {
        const result = stateLegislatureTermLength("ohio");
        expect(result).toEqual(
            {
                "House of Representatives": 2,
                "Senate": 4
            });
    });
    it('should return the term length of the state legislature when a valid state abbreviation is passed', () => {
        const result = stateLegislatureTermLength("oh");
        expect(result).toEqual(
            {
                "House of Representatives": 2,
                "Senate": 4
            });
    });
    it('should throw an error when an invalid state is passed.', () => {
        try{
            let didThrow = false;
            const result = stateLegislatureTermLength("NotAState");
        }catch(error){
            didThrow = true;
            expect(error).toEqual(Error("NotAState is not a valid USA state or USA state abbreviation."));
        }
        
        expect(didThrow).toEqual(true);
    });

});

describe('stateLegislatureTermLengthByChamber', () => {
    it('should return the term length of the upper house of the state legislature when a valid state name is passed and senate is passed', () => {
        const result = stateLegislatureTermLengthByChamber("ohio", 'senate');
        expect(result).toEqual(4);
    });

    it('should return the term length of the lower house of the state legislature when a valid state name is passed and house is passed', () => {
        const result = stateLegislatureTermLengthByChamber("ohio", 'house');
        expect(result).toEqual(2);
    });

    it('should return the term length of the upper house of the state legislature when a valid state name is passed and upper is passed', () => {
        const result = stateLegislatureTermLengthByChamber("ohio", 'upper');
        expect(result).toEqual(4);
    });

    it('should return the term length of the lower house of the state legislature when a valid state name is passed and lower is passed', () => {
        const result = stateLegislatureTermLengthByChamber("ohio", 'lower');
        expect(result).toEqual(2);
    });

    it('should return the term length of the upper house of the state legislature when a valid state name is passed and the name of the states chamber is passed', () => {
        const result = stateLegislatureTermLengthByChamber("WI", 'state senate');
        expect(result).toEqual(4);
    });

    it('should return the term length of the lower house of the state legislature when a valid state name is passed and the name of the states chamber is passed', () => {
        const result = stateLegislatureTermLengthByChamber("VA", 'House of Delegates ');
        expect(result).toEqual(2);
    });

    it('should throw an error if chamber is not passed as a string.', () => {
        try{
            let didThrow = false;
            const result =  stateLegislatureTermLengthByChamber("NotAState", 123);
        }catch(error){
            didThrow = true;
            expect(error).toEqual(Error("number is not a valid type for chamber. Input must be a string."));
        }
        
        expect(didThrow).toEqual(true);
    });

    it('should throw an error if an invalid name is passed for chamber', () => {
        try{
            let didThrow = false;
            const result =  stateLegislatureTermLengthByChamber("Ohio", 'typo');
        }catch(error){
            didThrow = true;
            expect(error).toEqual(Error("typo is not a valid state legislative chamber for Ohio. Please enter either 'House of Representatives' (can also use 'House') or 'Senate' (can also use 'Senate')."));
        }
        
        expect(didThrow).toEqual(true);
    });

    it('should throw an error when an invalid state is passed.', () => {
        try{
            let didThrow = false;
            const result =  stateLegislatureTermLengthByChamber("NotAState", 'house');
        }catch(error){
            didThrow = true;
            expect(error).toEqual(Error("NotAState is not a valid USA state or USA state abbreviation."));
        }
        
        expect(didThrow).toEqual(true);
    });
});

