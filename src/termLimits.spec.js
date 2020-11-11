const {
    statesWithTermLimits,
    doesStateHaveTermLimits
} = require('./termLimits');

describe('statesWithTermLimits', () => {
    it('should return all of the states with term limits', () => {
        const result = statesWithTermLimits();
        expect(result).toEqual(["Arizona", "Arkansas", "California", "Colorado", "Florida", "Louisiana", "Maine", "Michigan", "Missouri", "Montana", "Nebraska", "Nevada", "Ohio", "Oklahoma", "South Carolina"]);
    });
});

describe('doesStateHaveTermLimits', () => {
    it('should return true when a state name that has term limits is passed.', () => {
        const result = doesStateHaveTermLimits('Ohio');
        expect(result).toEqual(true);
    });
    it('should return true when a state abbreviation that has term limits is passed.', () => {
        const result = doesStateHaveTermLimits('AZ');
        expect(result).toEqual(true);
    });

    it('should return false when a state name that does not have term limits is passed.', () => {
        const result = doesStateHaveTermLimits('New York');
        expect(result).toEqual(false);
    });
    it('should return false when a state abbreviation that does not have term limits is passed.', () => {
        const result = doesStateHaveTermLimits('TX');
        expect(result).toEqual(false);
    });
    it('shouldthrow an erro when an invalid state is passed.', () => {
        try{
            let didThrow = false;
            const result = doesStateHaveTermLimits('NotAState');
        }catch(error){
            didThrow = true;
            expect(error).toEqual(Error("NotAState is not a valid USA state or USA state abbreviation."));
        }
        
        expect(didThrow).toEqual(true);
    });

});