const statesInformation = require('./../data/legislature_details.json');
const{retrieveStateDetails} = require('./../lib/common');


const statesWithTermLimits = () => {
    const statesWithTermLimits = statesInformation.filter(stateInfo => stateInfo.hasTermLimits);
    return statesWithTermLimits.map(stateDetails => stateDetails.state);
};

const doesStateHaveTermLimits = (stateName) => {
    const stateDetails = retrieveStateDetails(stateName);
    return stateDetails.hasTermLimits;   
};

module.exports = {
    statesWithTermLimits,
    doesStateHaveTermLimits
};