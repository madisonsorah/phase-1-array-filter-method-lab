// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(listOfDrivers, firstName) {
    return listOfDrivers.filter(function (driver){
        return driver.toLowerCase() === firstName.toLowerCase()
    });
    }   


    function fuzzyMatch(array, query) {
        return array.filter(function (driver) {
            return driver.slice(0, query.length) === query
        })
    }


function matchName(obj, string) {
    return obj.filter(function (nameMatch) {
        return nameMatch.name === string;
    })
}



// function superbowlResults(records) {
//     const winRecord = records.find((record) => record.result === "W");
//     if (winRecord) { 
//         return winRecord.year; 
//     }
// }