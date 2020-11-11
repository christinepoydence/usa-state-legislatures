const statesInformation = require('./../data/legislature_details.json');
const{retrieveStateDetails} = require('./../lib/common');

const stateLegislatureName = (stateName) => {
    const stateDetails = retrieveStateDetails(stateName);
    return {
        legislatureName: stateDetails.legislatureName,
        upperHouse: stateDetails.upperHouse.name,
        lowerHouse: stateDetails.lowerHouse.name
    }
};
  
const stateLegislatureMembers = (stateName) => {
    const stateDetails = retrieveStateDetails(stateName);
    return {
        [stateDetails.upperHouse.name]: stateDetails.upperHouse.memberCount,
        [stateDetails.lowerHouse.name]: stateDetails.lowerHouse.memberCount
    }
};

const stateLegislatureTermLength = (stateName) => {
    const stateDetails = retrieveStateDetails(stateName);
    return {
        [stateDetails.upperHouse.name]: stateDetails.upperHouse.term,
        [stateDetails.lowerHouse.name]: stateDetails.lowerHouse.term
    }
}
module.exports = {
    stateLegislatureName,
    stateLegislatureMembers,
    stateLegislatureTermLength
}
    