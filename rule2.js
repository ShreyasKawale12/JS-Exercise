function findAllSequences(arr, sequenceLength) {
    let indices = [];
    for(let i = 0; i <= arr.length - sequenceLength; i++) {
        let increasing = true;
        let decreasing = true;

        for(let j = 0; j < sequenceLength - 1; j++) {
            if(arr[i + j] >= arr[i + j + 1]) {
                increasing = false;
            }
            if(arr[i + j] <= arr[i + j + 1]) {
                decreasing = false;
            }
        }

        if(increasing || decreasing) {
            indices.push(i);
        }
    }

    return indices.length > 0 ? indices : "No sequences found";
}

