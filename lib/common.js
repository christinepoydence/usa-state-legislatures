const {isValidStateInput, retrieveStateInformation} = require("usa-state-validator");
const statesInformation = require('./../data/legislature_details.json');

const retrieveStateDetails = (stateName) => {
    if(isValidStateInput(stateName)){
        const formattedStateInfo = retrieveStateInformation(stateName);
        return statesInformation.find(stateInfo => stateInfo.state.toLowerCase() === formattedStateInfo.name.toLowerCase());
    }
    throw new Error(`${stateName} is not a valid USA state or USA state abbreviation.`);
};

module.exports = {
    retrieveStateDetails
}