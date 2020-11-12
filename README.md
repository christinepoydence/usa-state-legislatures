[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Known Vulnerabilities](https://snyk.io/test/github/christinepoydence/usa-state-legislatures/badge.svg?targetFile=package.json)](https://snyk.io/test/github/christinepoydence/usa-state-legislatures?targetFile=package.json)
[![Build Status](https://travis-ci.com/christinepoydence/usa-state-legislatures.svg?branch=main)](https://travis-ci.com/christinepoydence/usa-state-legislatures)
[![Coverage Status](https://coveralls.io/repos/github/christinepoydence/usa-state-legislatures/badge.svg?branch=main)](https://coveralls.io/github/christinepoydence/usa-state-legislatures?branch=main)
[![Maintainability](https://api.codeclimate.com/v1/badges/11e30c00c4717f60e540/maintainability)](https://codeclimate.com/github/christinepoydence/usa-state-legislatures/maintainability)

# usa-state-legislatures

This package returns various information about a given USA state legislature- including the name of each chamber, the number of members, the term length by chamber, and whether the state has imposed term limits.

## Install

```bash
npm install usa-state-legislatures
```

## Usage

Note: All methods in this package require a state to be passed. The state must be passed as a string, and either the full state name or the state abbreviation may be used. Case does not matter, and leading/trailing spaces will be ignored. For instance, all of the following inputs are valid for ther state of Ohio:
- "Ohio"
- "ohio"
- " oHIo "
- "OH"
- " oh "

### stateLegislatureName(stateName)

This method accepts a valid state as defined above and returns the state's legislature name, the name of it's upper chamber (usually Senate) and the name of it's lower chamber (usually House of Representatives). 
It is valid for:
- All 50 states in the United States of America

```javascript
const {stateLegislatures} = require("usa-state-legislatures")

const ohioLegislatureNames = stateLegislatures.stateLegislatureName('OH') 
console.log(ohioLegislatureNames)
//Would print the following JSON:
{
    "legislatureName": "General Assembly", 
    "lowerHouse": "House of Representatives", 
    "upperHouse": "Senate"
}
```

### stateLegislatureMembers(stateName)

This method accepts a valid state as defined above and returns the state's legislative chambers and their member counts.
It is valid for:
- All 50 states in the United States of America

```javascript
const {stateLegislatures} = require("usa-state-legislatures")

const ohioLegislatureMembers = stateLegislatures.stateLegislatureMembers('OH') 
console.log(ohioLegislatureMembers)
//Would print the following JSON:
{
    "House of Representatives": 99, 
    "Senate": 33
}
```

### stateLegislatureTermLength(stateName)

This method accepts a valid state as defined above and returns the state's legislative chambers and their member's term length in years.
It is valid for:
- All 50 states in the United States of America

*Important Note: Some states have variable terms for their Senate in order to account for redistricting years. This information is not yet incorporated into this package.*

```javascript
const {stateLegislatures} = require("usa-state-legislatures")

const ohioLegislatureTermLengths = stateLegislatures.stateLegislatureTermLength('OH') 
console.log(ohioLegislatureMembers)
//Would print the following JSON:
{
    "House of Representatives": 2, 
    "Senate": 4
}
```

### stateLegislatureTermLengthByChamber(stateName, chamber)

This method accepts a valid state as defined above and a legislative chamber and returns the member's term length in years for that chamber.
It is valid for:
- All 50 states in the United States of America

Valid inputs for the chamber include:
1. 'upper' for the upper legislative chamber (usually the Senate)
2. 'lower' for the lower legislative chamber (usually the House)
3. 'senate' for the upper legislative chamber
4. 'house' for the lower legislative chamber
5. The actual name of the legislative chamber in that state. (Ex. 'House of Delegates' in Virginia)
6. *Nebraska has a unicameral legislature. To retrieve results for Nebraska, simply enter 'Legislature' as the chamber.*

All inputs are case insensitive and will ignore leading/trailing spaces. The input must be a string.

*Important Note: Some states have variable terms for their Senate in order to account for redistricting. This information is not yet incorprated into this package.*

```javascript
const {stateLegislatures} = require("usa-state-legislatures")

const ohioLegislatureTermLengths = stateLegislatures.stateLegislatureTermLengthByChamber('OH','house') //returns 2
const virginiaLegislatureTermLengths = stateLegislatures.stateLegislatureTermLengthByChamber('Virginia','house of delegates') //returns 2
const nebraskaLegislatureTermLengths = stateLegislatures.stateLegislatureTermLengthByChamber('Nebraska','Legislature') //returns 4
```

### statesWithTermLimits()

This method returns a list of all states in the USA that impose term limits on their state legislatures.

```javascript
const {termLimits} = require("usa-state-legislatures")

const statesWithTermLimits = termLimits.statesWithTermLimits(); //returns a list of all states with term limits

```

### doesStateHaveTermLimits(stateName)

This method accepts a valid state as defined above and returns whether the state imposes term limits on their state legislature. 
It is valid for:
- All 50 states in the United States of America

```javascript
const {termLimits} = require("usa-state-legislatures")

termLimits.doesStateHaveTermLimits("ohio"); //returns true
termLimits.doesStateHaveTermLimits("NY"); //returns false

```