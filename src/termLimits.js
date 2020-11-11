const statesInformation = require('./../data/legislature_details.json');
const {isValidStateInput, retrieveStateInformation} = require("usa-state-validator")


const statesWithTermLimits = () => {
    const statesWithTermLimits = statesInformation.filter(stateInfo => stateInfo.hasTermLimits);
    return statesWithTermLimits.map(state => state.state);
}

const doesStateHaveTermLimits = (stateName) => {
    if(isValidStateInput){
        const formattedStateInfo = retrieveStateInformation(stateName);
        const stateDetails = statesInformation.find(stateInfo => stateInfo.state.toLowerCase() === formattedStateInfo.name.toLowerCase());
        return stateDetails.hasTermLimits;
    }
    throw new Error(`${stateName} is not a valid USA state or USA state abbreviation.`);
    
}

module.exports = {
    statesWithTermLimits,
    doesStateHaveTermLimits
};