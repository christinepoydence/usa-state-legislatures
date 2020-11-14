const statesInformation = require('./../data/legislature_details.json');
const{retrieveStateDetails} = require('./../lib/common');

const stateLegislatureName = (stateName) => {
    const stateDetails = retrieveStateDetails(stateName);
    return {
        legislatureName: stateDetails.legislatureName,
        upperHouse: stateDetails.upperHouse.name,
        lowerHouse: stateDetails.lowerHouse.name
    };
};

const retrieveLegislativeDetails = (stateName, dataToRetrieve) => {
    const stateDetails = retrieveStateDetails(stateName);
    return {
        [stateDetails.upperHouse.name]: stateDetails.upperHouse[dataToRetrieve],
        [stateDetails.lowerHouse.name]: stateDetails.lowerHouse[dataToRetrieve]
    };
};

const totalStateLegislativeMembers = (stateName) => {
    const stateDetails = retrieveStateDetails(stateName);
    const legislatureMembers = retrieveLegislativeDetails(stateName, "memberCount");
    return {
        ...legislatureMembers, 
        totalStateLegislativeMembers: stateDetails.upperHouse.memberCount + stateDetails.lowerHouse.memberCount
    };
};
  
const stateLegislatureMembers = (stateName) => {
    return retrieveLegislativeDetails(stateName, 'memberCount');
};

const stateLegislatureTermLength = (stateName) => {
    return retrieveLegislativeDetails(stateName, 'term');
};

const validateChamber = (chamber) => {
    if (typeof chamber=== 'string' || chamber instanceof String){
        return chamber.trim().toLowerCase();
    }else {
        throw new Error(`${typeof chamber} is not a valid type for chamber. Input must be a string.`);
    }
};

const retrieveChamberSpecificDetails = (stateName, chamber, dataToRetrieve) => {
    const formattedChamber = validateChamber(chamber);
    const stateDetails = retrieveStateDetails(stateName);
    if(formattedChamber === 'senate' || formattedChamber === 'upper' || formattedChamber === stateDetails.upperHouse.name.toLowerCase()){
        return stateDetails.upperHouse[dataToRetrieve];
    }else if(formattedChamber === 'house' || formattedChamber === 'lower' || formattedChamber === stateDetails.lowerHouse.name.toLowerCase()){
        return stateDetails.lowerHouse[dataToRetrieve];
    }else{
        throw new Error(`${formattedChamber} is not a valid state legislative chamber for ${stateDetails.state}. Please enter either '${stateDetails.lowerHouse.name}' (can also use 'House') or '${stateDetails.upperHouse.name}' (can also use 'Senate').`);
    }
};

const stateLegislatureTermLengthByChamber = (stateName, chamber) => {
    return retrieveChamberSpecificDetails(stateName, chamber, "term");
};

const stateLegislatureMembersByChamber = (stateName, chamber) => {
    return retrieveChamberSpecificDetails(stateName, chamber, "memberCount");
};

module.exports = {
    stateLegislatureName,
    stateLegislatureMembers,
    stateLegislatureTermLength,
    stateLegislatureTermLengthByChamber,
    totalStateLegislativeMembers,
    stateLegislatureMembersByChamber 
};
    