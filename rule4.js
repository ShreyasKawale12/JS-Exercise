function rule4(array, sequence_length){
    let rule4_indices=[]
    let required_up = true;

    for(let i=0; i<= array.length- 13; i++){
        let follows= true
        let previous = array[i]<array[i+1]
        for(let j=i+1; j<i+14; j++){
            if (array[j]<array[j+1]){
                if (previous ===true){
                    follows=false;
                    break
                } previous= true
            } else{
                if(previous===false){
                    follows= false;
                    break
                } previous= false
            }
        }
        if(follows===true){
            rule4_indices.push(i)
        }
    }
    return rule4_indices;
}
