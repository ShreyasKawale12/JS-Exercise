
let batchStats = {};

samples.forEach(sample => {
    const batch = sample.batch;
    const value = sample.value;

    if (!batchStats[batch]) {
        batchStats[batch] = { sum: 0, count: 0 };
    }

    batchStats[batch].sum += value;
    batchStats[batch].count++;
});

let averages = [];

for (let batch in batchStats) {
    const average = batchStats[batch].sum / batchStats[batch].count;

    averages.push(average);
}

console.log(averages);

function calculateAverage(arr) {
    let sum = arr.reduce(function(acc, val) {
        return acc + val;
    }, 0);

    return sum / arr.length;
}



