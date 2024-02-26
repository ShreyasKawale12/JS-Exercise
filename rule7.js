function rule7(arr, num, sequence_length) {
    let rule7_indices = [];
    for (let i = 0; i <= arr.length - sequence_length; i++) {
        let slice = arr.slice(i, i + sequence_length);
        if (slice.every(val => val > num -1 && val<num+1)) {
            rule7_indices.push(i);
        }
    }
    return rule7_indices;
}
