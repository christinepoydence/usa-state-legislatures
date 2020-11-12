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

const retrieveLegislativeDetails = (stateName, dataToRetrieve) => {
    const stateDetails = retrieveStateDetails(stateName);
    return {
        [stateDetails.upperHouse.name]: stateDetails.upperHouse[dataToRetrieve],
        [stateDetails.lowerHouse.name]: stateDetails.lowerHouse[dataToRetrieve]
    }
}
  
const stateLegislatureMembers = (stateName) => {
    return retrieveLegislativeDetails(stateName, 'memberCount');
};

const stateLegislatureTermLength = (stateName) => {
    return retrieveLegislativeDetails(stateName, 'term');
};

const stateLegislatureTermLengthByChamber = (stateName, chamber) => {
    if (typeof chamber=== 'string' || chamber instanceof String){
        chamber = chamber.trim().toLowerCase();
    }else {
        throw new Error(`${typeof chamber} is not a valid type for chamber. Input must be a string.`)
    }
    const stateDetails = retrieveStateDetails(stateName);
    if(chamber === 'senate' || chamber === 'upper' || chamber === stateDetails.upperHouse.name.toLowerCase()){
        return stateDetails.upperHouse.term
    }else if(chamber === 'house' || chamber === 'lower' || chamber === stateDetails.lowerHouse.name.toLowerCase()){
        return stateDetails.lowerHouse.term
    }else{
        throw new Error(`${chamber} is not a valid state legislative chamber for ${stateDetails.state}. Please enter either '${stateDetails.lowerHouse.name}' (can also use 'House') or '${stateDetails.upperHouse.name}' (can also use 'Senate').`)
    }
   
}
module.exports = {
    stateLegislatureName,
    stateLegislatureMembers,
    stateLegislatureTermLength,
    stateLegislatureTermLengthByChamber
}
    