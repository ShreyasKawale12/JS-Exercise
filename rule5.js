// function rule5(averages, averages_average, sequence_length) {
//
//     // Define the boundaries for zone A
//     let lowerBound = averages_average - 2;
//     let upperBound = averages_average + 2;
//
//     // Array to store the indexes of the data points that satisfy the condition
//     let indexes = [];
//
//     // Check for any numPoints consecutive data points where at least two of them fall within zone A
//     for(let i = 0; i < averages.length - sequence_length + 1; i++) {
//         let countLower = 0;
//         let countUpper = 0;
//         for(let j = 0; j < sequence_length; j++) {
//             if(averages[i+j] < lowerBound) countLower++;
//             if(averages[i+j] > upperBound) countUpper++;
//         }
//         if(countLower === 2 || countUpper === 2) {
//             for(let j = 0; j < sequence_length; j++) {
//                 indexes.push(i+j);
//             }
//         }
//     }
//     console.log(indexes);
//     return indexes;
// }

function rule5(averages, averages_average, numPoints) {


    let lowerBound = averages_average - 2;
    let upperBound = averages_average + 2;

    let indexes = [];

    for(let i = 0; i < averages.length - numPoints + 1; i++) {
        let countLower = 0;
        let countUpper = 0;
        for(let j = 0; j < numPoints; j++) {
            if(averages[i+j] < lowerBound) countLower++;
            if(averages[i+j] > upperBound) countUpper++;
        }
        if(countLower >= 2) {
            for(let j = 0; j < numPoints; j++) {
                if(averages[i+j] < lowerBound) indexes.push(i+j);
            }
        }
        if(countUpper >= 2) {
            for(let j = 0; j < numPoints; j++) {
                if(averages[i+j] > upperBound) indexes.push(i+j);
            }
        }
    }

    return indexes;
}



