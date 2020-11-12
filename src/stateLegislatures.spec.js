const {
    stateLegislatureName,
    stateLegislatureMembers,
    stateLegislatureTermLength,
    stateLegislatureTermLengthByChamber
} = require('./stateLegislatures');

describe('State Legislature Info', () => {

    const stateLegislatureData = [
        {
            input: {name: 'ohio', abbr: 'oh'},
            expectedResult: {
                legislatureName:{
                    "legislatureName": "General Assembly", 
                    "lowerHouse": "House of Representatives", 
                    "upperHouse": "Senate"
                },
                legislatureMembers: {
                    "House of Representatives": 99,
                    "Senate": 33
                },
                legislatureTermLength: {
                    "House of Representatives": 2,
                    "Senate": 4
                }
            }
        }
    ];
    
    const errorStateLegislatureData = [
        stateLegislatureName, stateLegislatureMembers, stateLegislatureTermLength
    ];

    test.each(stateLegislatureData)('state legislature information is returned successfully - name, member count, and term length',(data) =>{
        expect(stateLegislatureName(data.input.abbr)).toEqual(data.expectedResult.legislatureName);
        expect(stateLegislatureName(data.input.name)).toEqual(data.expectedResult.legislatureName);

        expect(stateLegislatureMembers(data.input.abbr)).toEqual(data.expectedResult.legislatureMembers);
        expect(stateLegislatureMembers(data.input.name)).toEqual(data.expectedResult.legislatureMembers);

        expect(stateLegislatureTermLength(data.input.abbr)).toEqual(data.expectedResult.legislatureTermLength);
        expect(stateLegislatureTermLength(data.input.name)).toEqual(data.expectedResult.legislatureTermLength);      
           
    });

    test.each(errorStateLegislatureData)('when an invalid state is passed, the correct error is thrown',(functionName) =>{
        let didThrow = false;
        try{
            const result = functionName("NotAState");
        }catch(error){
            didThrow = true;
            expect(error).toEqual(Error("NotAState is not a valid USA state or USA state abbreviation."));
        }
            
        expect(didThrow).toEqual(true);
           
    });
});

describe('stateLegislatureTermLengthByChamber', () => {
    const termLengthData = [
        {
            input: {
                state: 'ohio',
                chamber: 'senate'
            },
            expectedResult: 4
        },
        {
            input: {
                state: 'ohio',
                chamber: 'house'
            },
            expectedResult: 2
        },
        {
            input: {
                state: 'ohio',
                chamber: 'upper'
            },
            expectedResult: 4
        },
        {
            input: {
                state: 'ohio',
                chamber: 'lower'
            },
            expectedResult: 2
        },
        {
            input: {
                state: 'WI',
                chamber: 'state senate'
            },
            expectedResult: 4
        },
        {
            input: {
                state: 'VA',
                chamber: 'House of Delegates '
            },
            expectedResult: 2
        }
    ];
    
    const errorTermLengthData = [
        {
            input: {
                state: 'ohio',
                chamber: 123
            },
            expectedResult: Error("number is not a valid type for chamber. Input must be a string.")
        },
        {
            input: {
                state: 'ohio',
                chamber: 'typo'
            },
            expectedResult:Error("typo is not a valid state legislative chamber for Ohio. Please enter either 'House of Representatives' (can also use 'House') or 'Senate' (can also use 'Senate').")
        },
        {
            input: {
                state: 'NotAState',
                chamber: 'upper'
            },
            expectedResult: Error("NotAState is not a valid USA state or USA state abbreviation.")
        }
    ];
    

    test.each(termLengthData)('term limit information by chamber is returned successfully',(data) =>{
        expect(stateLegislatureTermLengthByChamber(data.input.state, data.input.chamber)).toEqual(data.expectedResult);   
    }); 

    test.each(errorTermLengthData)('when an invalid state or chamber is passed, the correct error is thrown',(data) =>{
        let didThrow = false;
        try{
            const result =  stateLegislatureTermLengthByChamber(data.input.state, data.input.chamber);
        }catch(error){
            didThrow = true;
            expect(error).toEqual(data.expectedResult);
        }
        
        expect(didThrow).toEqual(true);  
    });
});



