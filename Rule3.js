function rule3(arr, num, sequence_length) {
    let result = [];
    for(let i = 0; i <= arr.length - sequence_length; i++) {
        let slice = arr.slice(i, i + sequence_length);
        if(slice.every(val => val > num) || slice.every(val => val < num)) {
            result.push(i);
        }
    }
    return result;
}

