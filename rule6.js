// function rule6(averages, averages_average, sequence_length) {
//     let rule6_indices = [];
//     let count =0;
//     for (let i = 0; i <= averages.length - sequence_length; i++) {
//         count = 0;
//         let iteration_list = [];
//         for (let j = i; j < i + sequence_length; j++) {
//             if (averages[j] > averages_average + 1 || averages[j] < averages_average - 1) {
//                 count++;
//                 iteration_list.push(j);
//             }
//         }
//         if (count >= 4) {
//             rule6_indices = rule6_indices.concat(iteration_list);
//         }
//     }
//     return rule6_indices;
// }

function rule6(averages, averages_average, sequence_length) {


    let lowerBound = averages_average - 1;
    let upperBound = averages_average + 1;

    let indexes = [];

    for(let i = 0; i < averages.length - sequence_length + 1; i++) {
        let countLower = 0;
        let countUpper = 0;
        for(let j = 0; j < sequence_length; j++) {
            if(averages[i+j] < lowerBound) countLower++;
            if(averages[i+j] > upperBound) countUpper++;
        }
        if(countLower >= 4) {
            for(let j = 0; j < sequence_length; j++) {
                if(averages[i+j] < lowerBound) indexes.push(i+j);
            }
        }
        if(countUpper >= 4) {
            for(let j = 0; j < sequence_length; j++) {
                if(averages[i+j] > upperBound) indexes.push(i+j);
            }
        }
    }

    return indexes;
}

